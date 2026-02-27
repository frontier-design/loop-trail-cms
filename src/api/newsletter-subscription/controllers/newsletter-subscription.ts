/**
 * newsletter-subscription controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::newsletter-subscription.newsletter-subscription',
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);
      const to =
        process.env.NEWSLETTER_NOTIFY_EMAIL || process.env.GET_INVOLVED_NOTIFY_EMAIL;
      if (!to) {
        strapi.log.warn('[Newsletter] No notify email set; skipping notification');
        return response;
      }
      const body = ctx.request?.body?.data ?? ctx.request?.body ?? {};
      const email = body.email ?? '';
      if (!email) {
        strapi.log.warn('[Newsletter] Missing email in request body, skipping notification');
        return response;
      }
      const esc = (s: string) =>
        String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');

      const formattedDate = new Date().toLocaleString('en-CA', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
      const textBody = [
        `New newsletter signup`,
        ``,
        `Email: ${email}`,
        `Signed up: ${formattedDate}`,
      ].join('\n');
      const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
  <div style="max-width: 480px; padding: 24px;">
    <h2 style="margin: 0 0 16px; font-size: 1.25rem; color: #154C2C;">New Newsletter Signup</h2>
    <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    <p style="margin: 0; color: #666;">Signed up: ${formattedDate}</p>
    <p style="margin-top: 24px; font-size: 0.875rem; color: #888; text-align: center;">Loop Trail — Newsletter</p>
  </div>
</body>
</html>`;
      try {
        await strapi.plugin('email').service('email').send({
          from:
            process.env.EMAIL_FROM_NAME && process.env.SMTP_FROM
              ? `"${process.env.EMAIL_FROM_NAME}" <${process.env.SMTP_FROM}>`
              : process.env.SMTP_FROM || undefined,
          to,
          subject: `Newsletter signup: ${email}`,
          text: textBody,
          html: htmlBody,
        });
        strapi.log.info('[Newsletter] Notification email sent to', to);
      } catch (err) {
        strapi.log.error('[Newsletter] Failed to send notification:', err?.message ?? err);
      }
      return response;
    },
  })
);
