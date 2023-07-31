export interface SimpleSearchRequest {
  query: string;
  filters: {
    [key: string]: string[];
  };
  ranges?: {
    [key: string]: string[];
  };
  page: number;
  pageSize: number;
  sort?: {
    property: string;
    order: 'asc' | 'desc';
  };
}

export interface RouteSearchRequest {
  search: Search;
  tracking: string;
  parentQueryId: null;
}

export interface Search {
  query: Query;
  from: number;
  size: number;
  aggs: any;
  sort?: Sort[];
}

export interface Sort {
  _geo_distance: GeoDistance;
}

export interface Query {
  bool: Bool;
}

export interface Bool {
  filter?: Filter[];
  must?: Must[];
}

export interface Filter {
  geo_distance: GeoDistance;
}

export interface GeoDistance {
  distance?: string;
  distance_type?: string;
  coordinates: number[];
  mode?: string;
  order?: string;
  unit?: string;
}

export interface Must {
  query_string?: QueryString;
  [key: string]: any;
}

export interface QueryString {
  query: string;
}
