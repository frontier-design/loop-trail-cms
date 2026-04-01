/**
 * Patches @strapi/admin Auth provider to fix "v is not a function" /
 * "checkUserHasPermissions is not a function" error in production builds.
 *
 * Upstream fix: https://github.com/strapi/strapi/pull/25663
 * Remove this script once Strapi >= 5.41.1 is installed.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const FILES = [
  "node_modules/@strapi/admin/dist/admin/admin/src/features/Auth.mjs",
  "node_modules/@strapi/admin/dist/admin/admin/src/features/Auth.js",
];

const NOOP_LINE = "const NOOP_CHECK_USER_HAS_PERMISSIONS = async () => [];";

let patched = 0;

for (const rel of FILES) {
  const file = resolve(root, rel);
  let src;
  try {
    src = readFileSync(file, "utf8");
  } catch {
    console.log(`[patch-strapi-auth] skipping ${rel} (not found)`);
    continue;
  }

  if (src.includes("NOOP_CHECK_USER_HAS_PERMISSIONS")) {
    console.log(`[patch-strapi-auth] ${rel} already patched`);
    patched++;
    continue;
  }

  let out = src;

  out = out.replace(/^(const \[Provider, useAuth\])/m, `${NOOP_LINE}\n$1`);

  out = out.replace(
    "checkUserHasPermissions: checkUserHasPermissions,",
    "checkUserHasPermissions: checkUserHasPermissions ?? NOOP_CHECK_USER_HAS_PERMISSIONS,",
  );

  if (out !== src) {
    writeFileSync(file, out, "utf8");
    console.log(`[patch-strapi-auth] patched ${rel}`);
    patched++;
  } else {
    console.log(`[patch-strapi-auth] WARNING: could not apply patch to ${rel}`);
  }
}

console.log(`[patch-strapi-auth] done (${patched}/${FILES.length} files)`);
