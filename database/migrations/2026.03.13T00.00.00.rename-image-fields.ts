/**
 * One-time migration: update media morph references from long field names to short ones.
 * Strapi stores media relations in files_related_morphs with a `field` column.
 * When we rename a schema key, we must also update the stored field references
 * so existing uploads stay linked to the new short key.
 */

const RENAMES = [
  {
    old: 'MetaImage_1200x630_max500kb',
    new: 'MetaImage',
  },
  {
    old: 'HomeIntro_StackingImage_1600x1600_JPGorWebP_max700KB',
    new: 'StackingImage',
  },
  {
    old: 'IndigenousHomepageComponent_Image_1600x1600_JPGorWebP_max700KB',
    new: 'Image',
  },
  {
    old: 'HomeCta_Background_2400x1350_JPGorWebP_max900KB',
    new: 'Background',
  },
  {
    old: 'Logos_LogoItem_LogoImage_SVG_preferred_or_PNGorWebP_min800pxwide_max400KB',
    new: 'LogoImage',
  },
];

async function up(knex) {
  for (const rename of RENAMES) {
    await knex('files_related_morphs')
      .where('field', rename.old)
      .update({ field: rename.new });
  }
}

async function down(knex) {
  for (const rename of RENAMES) {
    await knex('files_related_morphs')
      .where('field', rename.new)
      .update({ field: rename.old });
  }
}

module.exports = { up, down };
