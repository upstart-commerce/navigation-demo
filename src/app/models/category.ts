export interface Category {
  type?:          string;
  id?:            string;
  links?:         Links;
  attributes:    Attributes;
  relationships?: CategoryRelationships;
  children?:      Category[];
}

interface Links {
  related?: Self;
  self:    Self;
}

interface Self {
  href: string;
}

interface Attributes {
  drupal_internal__tid?:         number;
  drupal_internal__revision_id?: number;
  revision_created?:             string;
  status:                       boolean;
  name:                         string;
  description:                  Description | null;
  weight:                       number;
  changed:                      string;
  path:                         Path;
  field_description:            Description | null;
  field_meta_description:       null | string;
  field_meta_title:             null | string;
  field_page_title:             null;
  field_search_query:           string;
  field_seo_keywords:           null | string;
}

interface Description {
  value:     string;
  format:    null | string;
  processed: string;
}

interface Path {
  alias:    string;
  pid:      number;
  langcode: string;
}

interface CategoryRelationships {
  vid:              CategoryRelationComponent;
  revision_user:    CategoryRelationComponent;
  parent:           CategoryRelationComponent;
  domain_access:    CategoryRelationComponent;
  field_components: CategoryRelationComponent;
  field_tags:       CategoryRelationComponent;
}

interface CategoryRelationComponent {
  data:  CategoryRelationData[] | null ;
  links: Links ;
}

interface CategoryRelationData {
  type: string;
  id:   string;
  meta?: CategoryRelationMeta;
}
interface CategoryRelationMeta {
  links?: MetaLinks;
  target_revision_id?: number;
  arity?:             number;
}

interface MetaLinks {
  help: Help;
}

interface Help {
  href: string;
  meta: HelpMeta;
}

interface HelpMeta {
  about: string;
}

