export interface BaseInterface {
  isLoading: boolean;
  error: any;
}

export interface BaseStateInterface<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
}

export interface BaseSearchStateInterface<T> {
  items: T[] | null;
  isLoading: boolean;
  error: string;
  filters: Property[];
  pagination: any;
}

export interface Property {
  property: string;
  propertyType: string;
  counts: Count[];
}

interface Count {
  value: string;
  count: number;
}

export interface ISearchFilters {
  [key: string]: any;
}

export interface ISearchOrder {
  property: string;
  asc: boolean;
}

export interface ISearchFilter {
  value: string;
  count: number;
}

export interface ISearchRequest {
  query: string;
  page: number;
  pageSize: number;
  filters: ISearchFilters;
  filter?: ISearchFilters;
  orders: ISearchOrder[];
  excludeIds?: string[];
}

export interface FieldConfig {
  fusion?: any;
  tpe?: string;
  defaultValue?: any;
  name?: string;
  placeholder?: string;
  value?: any;
  validators?: any[];
  of?: FieldConfig;
  meta?: any;
  properties?: {
    [key: string]: FieldConfig;
  };
  enum?: string[];
  options?: { label: string; code: string | null | boolean }[];
  sort?: boolean;
  canUseProductValue?: boolean;
  template?: any;
  isGroup?: boolean;
}
