"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds Cache-Control headers to successful, public GET requests against the
 * content API so browsers and any upstream proxy/CDN (e.g. nginx proxy_cache)
 * can serve repeat reads without hitting Strapi every time.
 *
 * - Only GET /api/* responses with status 200 are cached.
 * - Draft/preview requests (?status=draft) are never cached.
 * - Everything else is left untouched (mutations stay uncached).
 */
exports.default = (_config, { strapi: _strapi }) => {
    return async (ctx, next) => {
        var _a;
        await next();
        const isPublicApiGet = ctx.request.method === 'GET' && ctx.request.path.startsWith('/api/');
        const isDraft = ((_a = ctx.request.query) === null || _a === void 0 ? void 0 : _a.status) === 'draft';
        if (isPublicApiGet && ctx.status === 200 && !isDraft) {
            ctx.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
        }
    };
};
