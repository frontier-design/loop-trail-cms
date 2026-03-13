import type { Schema, Struct } from '@strapi/strapi';

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
    icon: 'magic';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Button: Schema.Attribute.Component<'link.link', true>;
    Subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqItemFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_item_faq_items';
  info: {
    displayName: 'FAQ-item';
    icon: 'bulletList';
  };
  attributes: {
    QuestionItem: Schema.Attribute.Component<
      'faq-item.faq-question-item',
      true
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqItemFaqQuestionItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_item_faq_question_items';
  info: {
    displayName: 'FAQ-question-item';
    icon: 'bulletList';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'star';
  };
  attributes: {
    Paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHomeIntro extends Struct.ComponentSchema {
  collectionName: 'components_home_home_intros';
  info: {
    displayName: 'home-intro';
  };
  attributes: {
    IntroText: Schema.Attribute.Blocks & Schema.Attribute.Required;
    StackingImage: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface HomeIndigenousHomepageComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_home_indigenous_homepage_components';
  info: {
    displayName: 'indigenous-homepage-component';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'link.link', false>;
    Paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface HomeLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_items';
  info: {
    displayName: 'logo-item';
    icon: 'apps';
  };
  attributes: {
    LogoImage: Schema.Attribute.Media<'images' | 'files'>;
    LogoText: Schema.Attribute.String;
    LogoTitle: Schema.Attribute.String;
  };
}

export interface HomeLogos extends Struct.ComponentSchema {
  collectionName: 'components_home_logos';
  info: {
    displayName: 'logos';
    icon: 'apps';
  };
  attributes: {
    LogoItem: Schema.Attribute.Component<'home.logo-item', true>;
    LogoSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HubItemHubItem extends Struct.ComponentSchema {
  collectionName: 'components_hub_item_hub_items';
  info: {
    displayName: 'HubItem';
    icon: 'code';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'link.link', true>;
    Paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Hub Item Title'>;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    LinkDisplay: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Download'>;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MapContainerMapContainer extends Struct.ComponentSchema {
  collectionName: 'components_map_container_map_containers';
  info: {
    displayName: 'Map-Container';
    icon: 'pinMap';
  };
  attributes: {
    Description: Schema.Attribute.String & Schema.Attribute.Required;
    MapDownloadLink: Schema.Attribute.Component<'link.link', true> &
      Schema.Attribute.Required;
    MapThumbnail: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NeighbourhoodsNeighbourhoods extends Struct.ComponentSchema {
  collectionName: 'components_neighbourhoods_neighbourhoods';
  info: {
    displayName: 'Neighbourhoods';
    icon: 'emotionHappy';
  };
  attributes: {
    NeighbourhoodName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StewardshipItemStewardshipItem extends Struct.ComponentSchema {
  collectionName: 'components_stewardship_item_stewardship_items';
  info: {
    displayName: 'Stewardship-item';
    icon: 'brush';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.cta': CtaCta;
      'faq-item.faq-item': FaqItemFaqItem;
      'faq-item.faq-question-item': FaqItemFaqQuestionItem;
      'home.carousel': HomeCarousel;
      'home.home-intro': HomeHomeIntro;
      'home.indigenous-homepage-component': HomeIndigenousHomepageComponent;
      'home.logo-item': HomeLogoItem;
      'home.logos': HomeLogos;
      'hub-item.hub-item': HubItemHubItem;
      'link.link': LinkLink;
      'map-container.map-container': MapContainerMapContainer;
      'neighbourhoods.neighbourhoods': NeighbourhoodsNeighbourhoods;
      'stewardship-item.stewardship-item': StewardshipItemStewardshipItem;
    }
  }
}
