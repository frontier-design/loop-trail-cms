/**
 * get-involved-submission controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::get-involved-submission.get-involved-submission',
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);
      const to = process.env.GET_INVOLVED_NOTIFY_EMAIL;
      if (!to) {
        strapi.log.warn('[Get Involved] GET_INVOLVED_NOTIFY_EMAIL not set; skipping email');
        return response;
      }
      const body = ctx.request?.body?.data ?? ctx.request?.body ?? {};
      const firstName = body.firstName ?? '';
      const lastName = body.lastName ?? '';
      const organization = body.organization ?? '';
      const email = body.email ?? '';
      const message = body.message ?? '';
      const submittedAt = body.submittedAt ?? new Date().toISOString();
      if (!firstName || !lastName || !email || !message) {
        strapi.log.warn('[Get Involved] Missing required fields in request body, skipping email');
        return response;
      }
      const emailBody = [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        organization ? `Organization: ${organization}` : null,
        `Submitted: ${submittedAt}`,
        '',
        'Message:',
        message,
      ]
        .filter(Boolean)
        .join('\n');

      const formattedDate = new Date(submittedAt).toLocaleString('en-CA', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const esc = (s: string) =>
        String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');

      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333; background-color: #f5f5f5;">
  <div style="max-width: 560px; margin: 0 auto; padding: 24px;">
    <div style="background: #fff; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
      <h1 style="margin: 0 0 24px; font-size: 1.25rem; font-weight: 700; color: #154C2C;">New Get Involved Submission</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: 600; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;">${esc(firstName)} ${esc(lastName)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${esc(email)}" style="color: #154C2C;">${esc(email)}</a></td></tr>
        ${organization ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #666;">Organization</td><td style="padding: 8px 0;">${esc(organization)}</td></tr>` : ''}
        <tr><td style="padding: 8px 0; font-weight: 600; color: #666;">Submitted</td><td style="padding: 8px 0;">${formattedDate}</td></tr>
      </table>
      <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
        <div style="font-weight: 600; color: #666; margin-bottom: 8px;">Message</div>
        <div style="background: #f8f9fa; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${esc(message)}</div>
      </div>
    </div>
    <p style="margin-top: 16px; font-size: 0.875rem; color: #888; text-align: center;">Get Involved form</p>
  </div>
</body>
</html>`;

      const fromAddr = process.env.SMTP_FROM || 'noreply@example.com';
      const fromName = process.env.EMAIL_FROM_NAME;
      const from = fromName ? `"${fromName}" <${fromAddr}>` : fromAddr;

      try {
        await strapi.plugin('email').service('email').send({
          from,
          to,
          subject: `Get Involved: New submission from ${firstName} ${lastName}`,
          text: emailBody,
          html,
        });
        strapi.log.info('[Get Involved] Notification email sent to', to);
      } catch (err) {
        strapi.log.error('[Get Involved] Failed to send notification:', err?.message ?? err);
      }
      return response;
    },
  })
);
