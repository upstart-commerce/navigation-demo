export interface SuggestResponse {
  result: Result;
}

export interface Result {
  id: string;
  displayName: string;
  access: string;
  indexes: Indexes;
}

export interface Indexes {
  [key: string]: CatalogLive;
}

export interface CatalogLive {
  queryId: string;
  data: SuggesResponseData;
}

export interface SuggesResponseData {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  failed: number;
  successful: number;
  total: number;
  skipped: number;
}

export interface Hits {
  total: Total;
  hits: Hit[];
  max_score: number;
}

export interface Hit {
  _index: string;
  _id: string;
  _score: number;
  _source: any;
  highlight: Highlight;
}

export interface Highlight {
  name: string[];
  id: string[];
  itemId: string[];
}

export interface Total {
  relation: string;
  value: number;
}
export interface ShippingMethod {
  name: string;
  id: string;
  taxCode: string;
}
