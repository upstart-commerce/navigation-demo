export interface DrupalPage {
  jsonapi:  Jsonapi;
  data:     PageData;
  included: Included[];
  links:    DataLinks;
}

export interface PageData {
  type:          string;
  id:            string;
  links:         DataLinks;
  attributes:    PageAttributes;
  relationships: PageRelationships;
}

export interface PageAttributes {
  drupal_internal__nid:   number;
  drupal_internal__vid:   number;
  revision_timestamp:     string;
  revision_log:           null;
  status:                 boolean;
  title:                  string;
  created:                string;
  changed:                string;
  promote:                boolean;
  sticky:                 boolean;
  moderation_state:       string;
  path:                   Path;
  field_page_description: string;
  field_page_title:       string;
  field_seo_keywords:     string;
}

export interface Path {
  alias:    null | string;
  pid:      number | null;
  langcode: string;
}

export interface DataLinks {
  self: Self;
}

export interface Self {
  href: string;
}

export interface PageRelationships {
  node_type:           NodeType;
  revision_uid:        NodeType;
  uid:                 NodeType;
  field_components:    FieldComponents;
  field_domain_access: DomainAccess;
  field_parent_page:   FieldComponents;
  field_tags:          FieldComponents;
}

export interface FieldComponents {
  data:  Datum[] | DAT | null;
  links: FluffyLinks;
}

export interface Datum {
  type: string;
  id:   string;
  meta: PurpleMeta;
}

export interface PurpleMeta {
  target_revision_id?:         number;
  drupal_internal__target_id?: number;
  links?:                      PurpleLinks;
}

export interface PurpleLinks {
  help: Help;
}

export interface Help {
  href: string;
  meta: HelpMeta;
}

export interface HelpMeta {
  about: string;
}

export interface DAT {
  type: string;
  id:   string;
  meta: DataMeta;
}

export interface DataMeta {
  drupal_internal__target_id: string;
}

export interface FluffyLinks {
  related: Self;
  self:    Self;
}

export interface DomainAccess {
  data:  DAT[];
  links: FluffyLinks;
}

export interface NodeType {
  data:  null;
  links: DataLinks;
}

export interface Included {
  type:          string;
  id:            string;
  links:         DataLinks;
  attributes:    IncludedAttributes;
  relationships: IncludedRelationships;
}

export interface IncludedAttributes {
  drupal_internal__tid?:             number;
  drupal_internal__revision_id:      number;
  revision_created?:                 string;
  status:                            boolean;
  name?:                             string;
  description?:                      null;
  weight?:                           number;
  changed?:                          string;
  path?:                             Path;
  drupal_internal__id?:              number;
  created?:                          string;
  parent_id?:                        string;
  parent_type?:                      string;
  parent_field_name?:                string;
  behavior_settings?:                any[];
  field_border_color?:               null;
  field_hide_from_breakpoint?:       string;
  field_layout?:                     string;
  field_main_image_path?:            null;
  field_sale_banner_image_path?:     null;
  field_sale_date_and_disclaimer?:   null;
  field_sale_description?:           null;
  field_sale_image_bg_color?:        null;
  field_show_border?:                boolean;
  field_show_shadow_on_bg_sale_img?: boolean;
  field_image_path?:                 null;
  field_product_description?:        null;
}

export interface IncludedRelationships {
  vid?:                            NodeType;
  revision_user?:                  NodeType;
  parent?:                         FieldComponents;
  domain_access?:                  DomainAccess;
  paragraph_type?:                 FieldComponents;
  field_component_key?:            FieldComponents;
  field_image?:                    FieldComponents;
  field_mobile_img?:               FieldComponents;
  field_mobile_sale_banner_image?: FieldComponents;
  field_product?:                  FieldComponents;
  field_sale_banner_image?:        FieldComponents;
  field_product_image?:            FieldComponents;
}

export interface Jsonapi {
  version: string;
  meta:    JsonapiMeta;
}

export interface JsonapiMeta {
  links: DataLinks;
}
