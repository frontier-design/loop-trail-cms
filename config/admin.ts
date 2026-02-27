import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: !!env('CLIENT_URL'),
    config: {
      allowedOrigins: env('CLIENT_URL') ? [env('CLIENT_URL')] : [],
      async handler(uid, { documentId, locale, status }) {
        const clientUrl = env('CLIENT_URL');
        if (!clientUrl) return null;

        const document = await strapi.documents(uid as any).findOne({ documentId });
        const pathname = uid === 'api::hubs.hubs' ? '/hubs' : null;
        if (!pathname) return null;

        const params = new URLSearchParams({
          preview: 'true',
          secret: env('PREVIEW_SECRET'),
          status: status ?? 'draft',
        });
        return `${clientUrl}${pathname}?${params}`;
      },
    },
  },
});

export default config;
