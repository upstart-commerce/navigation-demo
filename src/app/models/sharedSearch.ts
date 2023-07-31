export interface Property {
  property: string;
  propertyType: string;
  counts: CountProperty[];
}
export interface CountProperty {
  value: 'string';
  count: number;
  displayName?: string;
}

export interface RangeProperty extends Property {
  start: string;
  end: string;
  gap: string;
}

export interface FacetCounts {
  properties: Property[];
  ranges: RangeProperty[];
}

export interface ISharedResponse<T> {
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
