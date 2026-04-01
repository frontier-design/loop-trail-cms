"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Always allowed so local Vite (5173) can call Strapi when CORS_ORIGIN lists only production hosts. */
const defaultLocalDevOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
];
const config = ({ env }) => [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::cors',
        config: {
            origin: env('CORS_ORIGIN')
                ? [
                    ...new Set([
                        ...env('CORS_ORIGIN')
                            .split(',')
                            .map((o) => o.trim())
                            .filter(Boolean),
                        ...defaultLocalDevOrigins,
                    ]),
                ]
                : defaultLocalDevOrigins,
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            keepHeaderOnError: true,
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    'global::upload',
];
exports.default = config;
