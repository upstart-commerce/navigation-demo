export interface RootObject<T> {
  jsonapi: Jsonapi;
  data: T;
  meta?: { count: number | string };
  included?: GenericContent[];
  links?: Links;
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

export interface Content {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
  moderation_state: string;
}

export interface Relationships {
  [key: string]: {
    data?: any;
    links: Links2;
  };
}

export interface Revisionuser {
  data?: any;
  links: Links2;
}

export interface Blockcontenttype {
  data: Data;
  links: Links2;
}

export interface Links2 {
  self: Self;
  related: Self;
}

export interface Data {
  type: string;
  id: string;
}

export interface Attributes {
  drupal_internal__id: number;
  drupal_internal__revision_id: number;
  langcode: string;
  revision_created: string;
  revision_log?: any;
  status: boolean;
  moderation_state: string;
  info?: string;
  title?: string;
  changed: string;
  created: string;
  reusable: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  body: Body;
  field_target: string;
  path?: {
    alias: string;
    pid: number;
    langcode: string;
  };
}

export interface TagContent {
  label: any;
  type: string;
  id: string;
  attributes: TagAttributes;
  relationships: Relationships;
  links: Links;
}

export interface TagAttributes {
  drupal_internal__tid: number;
  drupal_internal__revision_id: number;
  langcode: string;
  revision_created: string;
  revision_log_message?: any;
  status: boolean;
  name: string;
  description?: any;
  weight: number;
  changed: string;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path?: {
    alias: string;
    pid: number;
    langcode: string;
  };
}

export interface File {
  type: string;
  id: string;
  meta?: {
    description: string;
  };
}

export interface FileContent {
  type: string;
  id: string;
  attributes: FileAttributes;
  relationships: Relationships | ImageRelationships;
  links: Links;
  url?: string;
  alt?: string;
  fileId?: string;
}

export interface FileAttributes {
  drupal_internal__fid: number;
  langcode: string;
  filename: string;
  uri: Uri;
  filemime: string;
  filesize: number;
  status: boolean;
  created: string;
  changed: string;
}

export interface ComponentContent<T> {
  type: string;
  id: string;
  attributes: T;
  relationships: ComponentRelationships;
  links?: Links;
}

export interface ComponentRelationships {
  paragraph_type: {
    data: {
      id: string;
      type: string;
    };
    links: Links2;
  };
  field_component_key: {
    data: any;
    links: Links2;
  };
  [key: string]: {
    data: {
      id: string;
      type: string;
    };
    links: Links2;
  };
}
export interface Uri {
  value: string;
  url: string;
}

export interface Body {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface Jsonapi {
  version: string;
  meta: Meta;
}

export interface Meta {
  links: Links;
}

export interface Links {
  self: Self;
  next?: {
    href: string;
  };
  prev?: {
    href: string;
  };
  first?: {
    href: string;
  };
  last?: {
    href: string;
  };
}

export interface Self {
  href: string;
}

export type PageNodes =
  | 'node/usc_block'
  | 'node/article'
  | 'node/custom_page'
  | 'file/file'
  | 'custom_page'
  | 'node/pdf';

export type FileNodes = 'node/pdf';

export interface SimplifiedPageData {
  id: string;
  status: boolean;
  title: string;
  description: string;
  alias: string;
  tags?: SimplifiedTagData[];
  field_image?: FileContent;
  imageAlt?: string;
}

export interface CustomPageData {
  id: string;
  status: boolean;
  title: string;
  seo_description: string;
  seo_keywords: string;
  seo_title: string;
  tags?: SimplifiedTagData[];
  components?: ComponentContent<any>[];
}

export interface SimplifiedCustomPageData {
  id: string;
  type: string;
  label?: string;
  data?: CustomPageData;
}

export interface SimplifiedTagData {
  id: string;
  type: string;
  label: string;
}

export interface SimplifiedFileData {
  id: string;
  name: string;
  type: string;
  file: {
    name: string;
    url: string;
    size: number;
  };
}

export interface SimplifiedComponentData {
  id: string;
  type: string;
  meta?: any;
}

export interface ComponentFormData {
  id: string;
  type: string;
  field_text: {
    format: string;
    value: string;
  };
  field_hide_from_breakpoint: string;
  node?: string;
  meta?: any;
  relationships: {
    field_component_key: string;
  };
}

export interface ComponentFacebookFormData {
  id: string;
  type: string;
  relationships: {
    field_component_key: string;
    field_facebook_image: string;
  };
  meta?: any;
  node?: string;
}

export interface Relationship {
  data: null | RelationshipRef[] | RelationshipRef;
  links?: any;
}

export interface RelationshipRef {
  id?: string;
  type?: string;
  meta?: {
    target_revision_id: number;
  };
}

export interface ImageRelationships {
  bundle: BundleOrRevisionUserOrUid;
  revision_user: BundleOrRevisionUserOrUid;
  uid: BundleOrRevisionUserOrUid;
  thumbnail: ThumbnailOrFieldMediaImage;
  field_media_image: ThumbnailOrFieldMediaImage;
}
export interface BundleOrRevisionUserOrUid {
  data?: null;
  links: Links;
}
export interface Links {
  self: SelfOrRelated;
}
export interface SelfOrRelated {
  href: string;
}
export interface ThumbnailOrFieldMediaImage {
  data: ImageData;
  links: Links1;
}
export interface ImageData {
  type: string;
  id: string;
  meta: ImageMeta;
}
export interface ImageMeta {
  alt?: null;
  title?: null;
  width: number;
  height: number;
  url: string;
  medium_image_url: string;
}
export interface Links1 {
  related: SelfOrRelated;
  self: SelfOrRelated;
}

export interface ProductContent {
  type: string;
  id: string;
  attributes: ProductAttributes;
  relationships: Relationships;
  links: Links;
}

export interface ProductAttributes {
  field_brand_name: string;
  field_price: string;
  field_product_id: string;
  field_product_name: string;
  field_type_name: string;
  moderation_state: string;
  revision_timestamp: string;
  status: boolean;
  title: string;
  path?: {
    alias: string;
    pid: number;
    langcode: string;
  };
}

export interface Navigation {
  type: 'menu_link_content--main';
  id: string;
  links: Links;
  attributes: NavigationAttributes;
  relationships: {
    [key: string]: Relationship;
  };
}

export interface NavigationWithChildren extends Navigation {
  children?: NavigationWithChildren[];
}

export interface NavigationSimplified {
  id: string;
  parent: string | null;
  name: string;
  title: string;
  status: boolean;
  weight: number;
  children?: NavigationSimplified[];
}

export interface NavigationAttributes {
  drupal_internal__id: number;
  drupal_internal__revision_id: number;
  langcode: string;
  revision_created: string;
  revision_log_message: null;
  enabled: boolean;
  title: string;
  description: null;
  menu_name: string;
  link: Link;
  external: boolean;
  rediscover: boolean;
  weight: number;
  expanded: boolean;
  parent: null | string;
  changed: string;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  view_mode: null | string;
  field_background_color: null | color;
  field_border_color: null | color;
  field_list_type: null | string;
  field_open_in_new_tab: null;
  field_overlay_menu: boolean | null;
  field_show_image_border: boolean | null;
  field_sub_menu: boolean | null;
  field_sub_navigation_column: string | null;
}

export interface Link {
  uri: string;
  title: string;
  options: any;
}

export interface color {
  color: string;
  opacity: null | string;
}
