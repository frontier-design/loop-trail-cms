/**
 * Fetch every Media Library asset via GET /api/upload/files and download binaries
 * into media-output/media/ (original asset only — no thumbnail/small/medium/large).
 *
 * Usage:
 *   node export-media-library.mjs
 *
 * Config: keep SOURCE_URL and SOURCE_TOKEN in sync with migrate.mjs (or set env vars).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXPORT_DIR = path.join(__dirname, "media-output");

const SOURCE_URL =
  process.env.STRAPI_SOURCE_URL ?? "https://cheerful-duck-64eccb8c9d.strapiapp.com";
const SOURCE_TOKEN =
  process.env.STRAPI_SOURCE_TOKEN ??
  "c657b0e7728311a8d6ed489c3a3d91ec0d3197e1ee4ae2998d49bcff42f13b909b8ebf43dccad15b83845c633f7dacbbbf8e15a0e2d3a3d0e983a1445dc197842ea0d21bc75b6398209b156d7f7eb7d54af2ef14152078da174914e79933aab15a6170135878fe5eba69ed32cdbcdd4f6bb6eb5fdc0db003498f42cb24320523";

const PAGE_SIZE = 100;

function buildQueryString(obj, prefix = "") {
  const parts = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      parts.push(buildQueryString(value, fullKey));
    } else {
      parts.push(`${encodeURIComponent(fullKey)}=${encodeURIComponent(value)}`);
    }
  }
  return parts.filter(Boolean).join("&");
}

async function apiFetch(endpoint, query = {}) {
  const qs = buildQueryString(query);
  const url = `${SOURCE_URL}/api/${endpoint}${qs ? "?" + qs : ""}`;
  console.log(`  GET ${url}`);
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${SOURCE_TOKEN}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

function normalizeFilesPayload(json) {
  if (Array.isArray(json)) return json;
  if (json?.data && Array.isArray(json.data)) return json.data;
  return [];
}

/** Original upload URL only (Strapi `formats` derivatives are skipped). */
function originalUrlFromFileRecord(file) {
  const main = file?.url;
  return main && String(main).trim() ? main.trim() : null;
}

async function fetchAllUploadFiles() {
  let page = 1;
  const merged = [];
  const seen = new Set();

  for (;;) {
    const json = await apiFetch("upload/files", {
      pagination: { page, pageSize: PAGE_SIZE },
    });
    const batch = normalizeFilesPayload(json);

    if (batch.length === 0) break;

    let added = 0;
    for (const row of batch) {
      const id = row?.id ?? row?.documentId;
      if (id == null) continue;
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push(row);
      added++;
    }

    if (added === 0) break;

    // Some hosts ignore pagination and return the full library in one response.
    if (batch.length > PAGE_SIZE) break;

    if (batch.length < PAGE_SIZE) break;

    page += 1;
  }

  return merged;
}

async function downloadFile(fileUrl, mediaDir) {
  const fullUrl = fileUrl.startsWith("http") ? fileUrl : `${SOURCE_URL}${fileUrl}`;
  const urlPath = new URL(fullUrl).pathname;
  const destPath = path.join(mediaDir, urlPath);
  const destDirPath = path.dirname(destPath);

  if (fs.existsSync(destPath)) {
    console.log(`  SKIP (exists) ${urlPath}`);
    return;
  }

  fs.mkdirSync(destDirPath, { recursive: true });
  console.log(`  DOWNLOAD ${urlPath}`);
  const res = await fetch(fullUrl);
  if (!res.ok) {
    console.error(`  FAILED ${fullUrl}: ${res.status}`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  if (!SOURCE_TOKEN) {
    console.error("Set STRAPI_SOURCE_TOKEN or edit SOURCE_TOKEN in this file.");
    process.exit(1);
  }

  console.log("\n=== EXPORT MEDIA LIBRARY (upload/files) ===\n");

  fs.mkdirSync(EXPORT_DIR, { recursive: true });
  const mediaDir = path.join(EXPORT_DIR, "media");
  fs.mkdirSync(mediaDir, { recursive: true });

  const files = await fetchAllUploadFiles();
  console.log(`\n  Listed ${files.length} file record(s)\n`);

  const indexPath = path.join(EXPORT_DIR, "media-library-index.json");
  fs.writeFileSync(
    indexPath,
    JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        source: SOURCE_URL,
        count: files.length,
        files,
      },
      null,
      2
    )
  );
  console.log(`  Wrote ${indexPath}\n`);

  const allUrls = new Set();
  for (const f of files) {
    const u = originalUrlFromFileRecord(f);
    if (u) allUrls.add(u);
  }

  console.log(`--- Downloading ${allUrls.size} original file(s) ---`);
  for (const url of allUrls) {
    await downloadFile(url, mediaDir);
  }

  console.log(`\n=== DONE ===`);
  console.log(`Media root: ${mediaDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
