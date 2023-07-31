export interface Menu {
  id: string;
  type: string;
  attributes: MenuAttributes;
  iconData: IconData;
  productCategoryData: ProductCategoryData;
  subMenuLayout: SubMenuLayout;
  children: Menu[];
}

export interface MenuAttributes {
  title: string;
  link: string;
  enabled: boolean;
  external: boolean;
  expanded: boolean;
  weight: number;
  parent: null | string;
  field_open_in_new_tab: boolean;
  field_background_color: null;
  field_border_color: null;
  field_list_type: string;
  field_show_image_border: boolean;
}

export interface Child {
  id: string;
  type: string;
  attributes: MenuAttributes;
  iconData: IconData;
  productCategoryData: ProductCategoryData;
  subMenuLayout: SubMenuLayout;
}

export interface IconData {
  id: null;
  meta: null;
  attributes: null;
}

export interface ProductCategoryData {
  id: null | string;
  attributes: ProductCategoryDataAttributes | null;
  components: any[];
  tags: any[];
  parent?: null;
}

export interface ProductCategoryDataAttributes {
  name: string;
  status: boolean;
  description: null;
  meta: Meta;
  search_query: string;
  link: string | null;
}

export interface Meta {
  description: null;
  title: null;
  keywords: null;
}

export interface SubMenuLayout {
  id: string;
  attributes: SubMenuLayoutAttributes;
  columns: Columns;
}

export interface SubMenuLayoutAttributes {
  drupal_internal__id: number;
  drupal_internal__revision_id: number;
  status: boolean;
  created: string;
  parent_id: string;
  parent_type: string;
  parent_field_name: string;
  behavior_settings: any[];
  field_hide_from_breakpoint: string;
  field_link: null;
  field_open_in_new_tab: boolean;
  field_sub_navigation_columns: string;
}

export interface Columns {
  [key: string]: Column;
}

export interface Column {
  width: number | null;
  components: any[];
}
