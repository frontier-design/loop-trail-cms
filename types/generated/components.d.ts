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
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.cta': CtaCta;
      'faq-item.faq-item': FaqItemFaqItem;
      'faq-item.faq-question-item': FaqItemFaqQuestionItem;
      'hub-item.hub-item': HubItemHubItem;
      'link.link': LinkLink;
      'map-container.map-container': MapContainerMapContainer;
    }
  }
}
