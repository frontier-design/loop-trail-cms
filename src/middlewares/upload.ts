import type { Core } from '@strapi/strapi';

export default (
  config: unknown,
  { strapi }: { strapi: Core.Strapi }
) => {
  return async (ctx: { request: { path: string; method: string; body?: { fileInfo?: unknown } }; }, next: () => Promise<void>) => {
    if (
      (ctx.request.path === '/upload' || ctx.request.path === '/api/upload') &&
      ctx.request.method === 'POST'
    ) {
      const rawFileInfo = ctx.request.body?.fileInfo;
      let normalizedFileInfo = rawFileInfo;

      if (Array.isArray(rawFileInfo) && rawFileInfo.length === 1) {
        try {
          const value = rawFileInfo[0];
          normalizedFileInfo =
            typeof value === 'string' ? JSON.parse(value) : value;
        } catch {
          strapi.log.warn('Failed to parse fileInfo from array element');
        }
      } else if (typeof rawFileInfo === 'string') {
        try {
          normalizedFileInfo = JSON.parse(rawFileInfo);
        } catch {
          strapi.log.warn('Failed to parse fileInfo from string');
        }
      }

      if (
        typeof normalizedFileInfo !== 'object' ||
        normalizedFileInfo === null
      ) {
        normalizedFileInfo = {};
      }

      ctx.request.body.fileInfo = normalizedFileInfo;
    }

    await next();
  };
};
