"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => {
    const host = env('SMTP_HOST', 'localhost');
    const port = env.int('SMTP_PORT', 587);
    const username = env('SMTP_USERNAME');
    const password = env('SMTP_PASSWORD');
    const ignoreTLS = env.bool('SMTP_IGNORE_TLS', false);
    const providerOptions = {
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
        'strapi-google-analytics-dashboard': {
            enabled: false,
        },
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
exports.default = config;
