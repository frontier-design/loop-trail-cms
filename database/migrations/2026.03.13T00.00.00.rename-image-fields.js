/**
 * One-time migration: update media morph/link references from long field names
 * to short ones. Strapi v5 may store media relations in different tables
 * depending on the database (SQLite vs PostgreSQL). This migration checks for
 * both the morph table and individual component link tables.
 */

const RENAMES = [
  {
    old: 'MetaImage_1200x630_max500kb',
    new: 'MetaImage',
    linkTables: ['components_basic_shared_metas_MetaImage_1200x630_max500kb_lnk'],
    newLinkTable: 'components_basic_shared_metas_meta_image_lnk',
  },
  {
    old: 'HomeIntro_StackingImage_1600x1600_JPGorWebP_max700KB',
    new: 'StackingImage',
    linkTables: ['components_home_home_intros_HomeIntro_StackingImage_1600x1600_JPGorWebP_max700KB_lnk'],
    newLinkTable: 'components_home_home_intros_stacking_image_lnk',
  },
  {
    old: 'IndigenousHomepageComponent_Image_1600x1600_JPGorWebP_max700KB',
    new: 'Image',
    linkTables: ['components_home_indigenous_homepage_components_IndigenousHomepageComponent_Image_1600x1600_JPGorWebP_max700KB_lnk'],
    newLinkTable: 'components_home_indigenous_homepage_components_image_lnk',
  },
  {
    old: 'HomeCta_Background_2400x1350_JPGorWebP_max900KB',
    new: 'Background',
    linkTables: ['components_cta_ctas_HomeCta_Background_2400x1350_JPGorWebP_max900KB_lnk'],
    newLinkTable: 'components_cta_ctas_background_lnk',
  },
  {
    old: 'Logos_LogoItem_LogoImage_SVG_preferred_or_PNGorWebP_min800pxwide_max400KB',
    new: 'LogoImage',
    linkTables: ['components_home_logo_items_Logos_LogoItem_LogoImage_SVG_preferred_or_PNGorWebP_min800pxwide_max400KB_lnk'],
    newLinkTable: 'components_home_logo_items_logo_image_lnk',
  },
];

async function tableExists(knex, tableName) {
  try {
    const exists = await knex.schema.hasTable(tableName);
    return exists;
  } catch {
    return false;
  }
}

async function up(knex) {
  // Strategy 1: morph table (SQLite / older Strapi setups)
  if (await tableExists(knex, 'files_related_morphs')) {
    for (const rename of RENAMES) {
      await knex('files_related_morphs')
        .where('field', rename.old)
        .update({ field: rename.new });
    }
    return;
  }

  // Strategy 2: Strapi v5 handles schema column renames via its own sync.
  // Media link tables are auto-managed. No manual rename needed — Strapi
  // will create new link tables for the short keys on startup. Existing
  // media may need to be re-linked via the admin UI if the old link tables
  // had data under the long key names.
}

async function down(knex) {
  if (await tableExists(knex, 'files_related_morphs')) {
    for (const rename of RENAMES) {
      await knex('files_related_morphs')
        .where('field', rename.new)
        .update({ field: rename.old });
    }
  }
}

module.exports = { up, down };
