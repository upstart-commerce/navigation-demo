export interface DrupalAPI<T = any> {
  jsonapi: Jsonapi;
  data: T;
  included: GenericContent[];
  links: Links;
}

export interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
}

interface Relationships {
  node_type: Nodetype;
  revision_uid: Nodetype;
  uid: Nodetype;
}

interface Nodetype {
  data: Data;
  links: Links2;
}

interface Links2 {
  self: Self;
  related: Self;
}

interface Data {
  type: string;
  id: string;
}

interface Attributes {
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  langcode: string;
  revision_timestamp: string;
  revision_log?: any;
  status: boolean;
  title: string;
  created: string;
  changed: string;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path: Path;
  body: Body;
}

interface Body {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

interface Path {
  alias: string;
  pid: number;
  langcode: string;
}

interface Jsonapi {
  version: string;
  meta: Meta;
}

interface Meta {
  links: Links;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}


export interface AliasPath {
  resolved:   string;
  isHomePath: boolean;
  entity:     AliasEntity;
  label:      string;
  jsonapi:    AliasJsonapi;
  meta:       AliasMeta;
}

export interface AliasEntity {
  canonical: string;
  type:      string;
  bundle:    string;
  id:        string;
  uuid:      string;
}

export interface AliasJsonapi {
  individual:   string;
  resourceName: string;
  pathPrefix:   string;
  basePath:     string;
  entryPoint:   string;
}

export interface AliasMeta {
  deprecated: Deprecated;
}

export interface Deprecated {
  "jsonapi.pathPrefix": string;
}

export interface GenericContent<T = any> {
  type: string;
  id: string;
  attributes: T;
  relationships: {
    [key: string]: Relationship;
  };
  links: Links;
}
export interface Relationship {
  data: null | RelationshipRef[] | RelationshipRef | any;
  links?: any;
}
export interface RelationshipRef {
  id?: string;
  type?: string;
  meta?: {
    target_revision_id: number;
  };
}

export enum DrupalTypes {
  TAG = 'taxonomy_term--custom_page_tags',
  CATEGORY = 'taxonomy_term--products_category',
  HERO_COMPONENT = 'paragraph--hero_component',
  TEXT_COMPONENT = 'paragraph--text',
  REMOTE_MEDIA_COMPONENT = 'paragraph--remote_media',
  CATEGORY_KEY = 'taxonomy_term--categories_components_keys',
}

export interface TextOptionalCTAAttributes {
  drupal_internal__id:             number;
  drupal_internal__revision_id:    number;
  status:                          boolean;
  created:                         string;
  parent_id:                       string;
  parent_type:                     string;
  parent_field_name:               string;
  behavior_settings:               any[];
  field_call_to_action_color:      FieldColor;
  field_call_to_action_text_color: FieldColor;
  field_cta_aria_label:            string | null;
  field_hide_from_breakpoint:      string;
  field_html_attribute_options:    FieldHTMLAttributeOptions | null;
  field_link:                      FieldLink | null;
  field_open_in_new_tab:           boolean;
  field_text:                      FieldText;
  field_text_relation_button:      string;
}

export interface TextComponentAttributes {
  drupal_internal__tid?:        number;
  drupal_internal__revision_id: number;
  revision_created?:            string;
  status:                       boolean;
  name?:                        string;
  description?:                 null;
  weight?:                      number;
  changed?:                     string;
  path?:                        Path;
  drupal_internal__id?:         number;
  created?:                     string;
  parent_id?:                   string;
  parent_type?:                 string;
  parent_field_name?:           string;
  behavior_settings?:           any[];
  field_hide_from_breakpoint?:  string;
  field_text?:                  FieldText;
}

export interface CTAButtonAttributes {
  drupal_internal__id:             number;
  drupal_internal__revision_id:    number;
  langcode:                        string;
  status:                          boolean;
  created:                         string;
  parent_id:                       string;
  parent_type:                     string;
  parent_field_name:               string;
  behavior_settings:               any[];
  default_langcode:                boolean;
  revision_translation_affected:   boolean;
  field_call_to_action_color:      FieldColor;
  field_call_to_action_text_color: FieldColor;
  field_cta_aria_label:            string;
  field_cta_size:                  string;
  field_cta_text:                  string;
  field_html_attribute_options:    FieldHTMLAttributeOptions;
  field_link:                      FieldLink;
  field_open_in_new_tab:           boolean;
}
export interface FieldColor {
  color:   string;
  opacity: null;
}

export interface FieldHTMLAttributeOptions {
  value:     string;
  format:    string;
  processed: string;
}
export interface FieldLink {
  uri:     string;
  title:   string;
  options: any[];
  iframe?: string;
}
export interface LinkListingAttributes {
  drupal_internal__id:          number;
  drupal_internal__revision_id: number;
  status:                       boolean;
  created:                      string;
  parent_id:                    string;
  parent_type:                  string;
  parent_field_name:            string;
  behavior_settings:            any[];
  field_hide_from_breakpoint:   string;
  field_list_type:              string;
  field_orientation:            string;
}
export interface ProductCategoryAttributes {
  parent_field_name?: string;
  status: boolean;
  parent_type?: string;
  field_hide_from_breakpoint?: string;
  created?: string;
  drupal_internal__revision_id: number;
  drupal_internal__tid?: number;
  parent_id?: string;
  drupal_internal__id?: number;
  field_background_color: string,
  field_border_color: string,
  field_categories_per_row_desktop: number
  field_categories_per_row_mobile: number
  field_heading: string,
  field_heading_alignment: string,
  field_image_background_color: string,
  field_show_image_border: boolean
}

export interface ProductCategoryItemAttributes {
  drupal_internal__id: number;
  drupal_internal__revision_id: number;
  status: boolean;
  created: string;
  parent_id: string;
  parent_type: string;
  parent_field_name: string;
  field_cta_aria_label: string
  field_link: FieldLink
  field_open_in_new_tab: boolean
}

export interface FieldText {
  value:     string;
  format:    string;
  processed: string;
}
export interface RemoteMedia {
  field_media_link: FieldLink;
}
