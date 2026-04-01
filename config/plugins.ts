import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const host = env('SMTP_HOST', 'localhost');
  const port = env.int('SMTP_PORT', 587);
  const username = env('SMTP_USERNAME');
  const password = env('SMTP_PASSWORD');
  const ignoreTLS = env.bool('SMTP_IGNORE_TLS', false);

  const providerOptions: Record<string, unknown> = {
    host,
    port,
    secure: env.bool('SMTP_SECURE', false),
  };

  if (ignoreTLS) {
    providerOptions.ignoreTLS = true;
  }

  if (username && password) {
    providerOptions.auth = {
      user: username,
      pass: password,
    };
  }

  return {
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions,
        settings: {
          defaultFrom: env('SMTP_FROM', 'noreply@example.com'),
          defaultReplyTo: env('SMTP_REPLY_TO', 'noreply@example.com'),
        },
      },
    },
  };
};

export default config;
