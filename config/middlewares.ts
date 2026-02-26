import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx) => {
        const origin = ctx.request.header.origin;
        if (!origin) return false;
        if (origin.startsWith('http://localhost:') || origin.startsWith('https://localhost:'))
          return origin;
        if (origin.endsWith('.vercel.app') || origin === 'https://vercel.app') return origin;
        const extra = env.array('CORS_ORIGIN', []);
        if (extra.includes(origin)) return origin;
        return false;
      },
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
];

export default config;
