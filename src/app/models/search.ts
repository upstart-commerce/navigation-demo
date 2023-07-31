export interface SearchRequest {
  filters: any;
  [key: string]: any;
}

export interface Property {
  property: string;
  counts: any[];
}

export interface FacetCounts {
  properties: Property[];
  ranges: any[];
}

export interface ISearchResponse<T> {
  items: T;
  page: number;
  pageSize: number;
  count: number;
  facetCounts: FacetCounts;
}

export interface ISuggestReponse {
  items: Item[];
}

interface Item {
  property: string;
  propertyType: string;
  suggestions: Suggestion[];
}

interface Suggestion {
  term: string;
  weight: number;
  payload: string;
}
