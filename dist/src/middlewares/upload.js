"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    return async (ctx, next) => {
        var _a;
        if ((ctx.request.path === '/upload' || ctx.request.path === '/api/upload') &&
            ctx.request.method === 'POST') {
            const rawFileInfo = (_a = ctx.request.body) === null || _a === void 0 ? void 0 : _a.fileInfo;
            let normalizedFileInfo = rawFileInfo;
            if (Array.isArray(rawFileInfo) && rawFileInfo.length === 1) {
                try {
                    const value = rawFileInfo[0];
                    normalizedFileInfo =
                        typeof value === 'string' ? JSON.parse(value) : value;
                }
                catch {
                    strapi.log.warn('Failed to parse fileInfo from array element');
                }
            }
            else if (typeof rawFileInfo === 'string') {
                try {
                    normalizedFileInfo = JSON.parse(rawFileInfo);
                }
                catch {
                    strapi.log.warn('Failed to parse fileInfo from string');
                }
            }
            if (typeof normalizedFileInfo !== 'object' ||
                normalizedFileInfo === null) {
                normalizedFileInfo = {};
            }
            ctx.request.body.fileInfo = normalizedFileInfo;
        }
        await next();
    };
};
