'use strict';

module.exports = {
  async afterCreate(event) {
    strapi.log.info('[Get Involved] afterCreate lifecycle triggered');
    const { result } = event;
    const to = process.env.GET_INVOLVED_NOTIFY_EMAIL;
    if (!to) {
      strapi.log.warn('GET_INVOLVED_NOTIFY_EMAIL not set; skipping email');
      return;
    }
    const doc = result?.document ?? result;
    const firstName = doc?.firstName ?? doc?.attributes?.firstName;
    const lastName = doc?.lastName ?? doc?.attributes?.lastName;
    const organization = doc?.organization ?? doc?.attributes?.organization;
    const email = doc?.email ?? doc?.attributes?.email;
    const message = doc?.message ?? doc?.attributes?.message;
    const submittedAt = doc?.submittedAt ?? doc?.attributes?.submittedAt;
    if (!firstName || !lastName || !email || !message) {
      strapi.log.warn('[Get Involved] Missing required fields in result, skipping email. Result keys:', Object.keys(result || {}));
      return;
    }
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : null,
      `Submitted: ${submittedAt || new Date().toISOString()}`,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');
    try {
      await strapi.plugin('email').service('email').send({
        to,
        subject: `Get Involved: New submission from ${firstName} ${lastName}`,
        text: body,
        html: body.replace(/\n/g, '<br>'),
      });
      strapi.log.info('[Get Involved] Notification email sent to', to);
    } catch (err) {
      strapi.log.error('[Get Involved] Failed to send notification:', err?.message || err);
      strapi.log.error('[Get Involved] Full error:', err);
    }
  },
};
