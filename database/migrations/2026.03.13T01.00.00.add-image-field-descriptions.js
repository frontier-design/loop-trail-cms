/**
 * One-time migration: add image spec descriptions to Content Manager field metadata.
 * These appear as grey helper text below each image/media field in the admin UI.
 */

const FIELD_DESCRIPTIONS = [
  // Components
  { key: 'plugin_content_manager_configuration_components::home.home-intro', field: 'StackingImage', desc: '1600×1350 px · JPG or WebP · max 700 KB' },
  { key: 'plugin_content_manager_configuration_components::home.indigenous-homepage-component', field: 'Image', desc: '1600×1600 px · JPG or WebP · max 700 KB' },
  { key: 'plugin_content_manager_configuration_components::cta.cta', field: 'Background', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
  { key: 'plugin_content_manager_configuration_components::home.logo-item', field: 'LogoImage', desc: 'SVG preferred · PNG or WebP fallback · min 800 px wide · max 400 KB' },
  { key: 'plugin_content_manager_configuration_components::basic.shared-meta', field: 'MetaImage', desc: '1200×630 px · JPG or PNG · max 500 KB' },
  { key: 'plugin_content_manager_configuration_components::map-container.map-container', field: 'MapThumbnail', desc: '1600×900 px (16:9) · JPG or WebP · max 700 KB' },
  { key: 'plugin_content_manager_configuration_components::map-container.map-download-link', field: 'MapFile', desc: 'PDF · max 20 MB' },
  { key: 'plugin_content_manager_configuration_components::hub-item.hub-item', field: 'Image', desc: '1600×900 px (16:9) · JPG or WebP · max 700 KB' },
  { key: 'plugin_content_manager_configuration_components::stewardship-item.stewardship-item', field: 'Image', desc: '1600×1200 px (4:3) · JPG or WebP · max 700 KB' },
  // Content types – Hero images
  { key: 'plugin_content_manager_configuration_content_types::api::hubs.hubs', field: 'Hero', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
  { key: 'plugin_content_manager_configuration_content_types::api::maps.maps', field: 'Hero', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
  { key: 'plugin_content_manager_configuration_content_types::api::indigenous-stewardship.indigenous-stewardship', field: 'Hero', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
  { key: 'plugin_content_manager_configuration_content_types::api::indigenous-stewardship.indigenous-stewardship', field: 'ExplainerImage', desc: '1600×1200 or 1600×1600 px · JPG or WebP · max 700 KB' },
  { key: 'plugin_content_manager_configuration_content_types::api::faqs.faqs', field: 'Hero', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
  { key: 'plugin_content_manager_configuration_content_types::api::get-involved.get-involved', field: 'Hero', desc: '2400×1350 px (16:9) · JPG, WebP, or MP4 · images max 900 KB · videos max 15 MB' },
];

async function up(knex) {
  for (const { key, field, desc } of FIELD_DESCRIPTIONS) {
    const rows = await knex('strapi_core_store_settings').where('key', key).select('value');
    if (!rows.length) continue;

    const config = JSON.parse(rows[0].value);
    if (!config.metadatas?.[field]?.edit) continue;

    config.metadatas[field].edit.description = desc;

    await knex('strapi_core_store_settings')
      .where('key', key)
      .update({ value: JSON.stringify(config) });
  }
}

async function down(knex) {
  for (const { key, field } of FIELD_DESCRIPTIONS) {
    const rows = await knex('strapi_core_store_settings').where('key', key).select('value');
    if (!rows.length) continue;

    const config = JSON.parse(rows[0].value);
    if (!config.metadatas?.[field]?.edit) continue;

    config.metadatas[field].edit.description = '';

    await knex('strapi_core_store_settings')
      .where('key', key)
      .update({ value: JSON.stringify(config) });
  }
}

module.exports = { up, down };
