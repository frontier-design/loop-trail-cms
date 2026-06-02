import type { Core } from '@strapi/strapi';

type CacheCtx = {
  request: {
    method: string;
    path: string;
    query?: Record<string, unknown>;
    header: Record<string, string | undefined>;
  };
  status: number;
  set: (field: string, value: string) => void;
};

/**
 * Adds Cache-Control headers to successful, public GET requests against the
 * content API so browsers and any upstream proxy/CDN (e.g. nginx proxy_cache)
 * can serve repeat reads without hitting Strapi every time.
 *
 * - Only GET /api/* responses with status 200 are cached.
 * - Draft/preview requests (?status=draft) are never cached.
 * - Everything else is left untouched (mutations stay uncached).
 */
export default (_config: unknown, { strapi: _strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: CacheCtx, next: () => Promise<void>) => {
    await next();

    const isPublicApiGet =
      ctx.request.method === 'GET' && ctx.request.path.startsWith('/api/');
    const isDraft = ctx.request.query?.status === 'draft';

    if (isPublicApiGet && ctx.status === 200 && !isDraft) {
      ctx.set(
        'Cache-Control',
        'public, max-age=60, stale-while-revalidate=300'
      );
    }
  };
};
