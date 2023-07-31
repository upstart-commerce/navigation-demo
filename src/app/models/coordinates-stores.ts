import { LocationProps } from './locations';
export interface CoordinatesStoresResponse {
  result: Result;
}

interface Result {
  id:          string;
  displayName: string;
  access:      string;
  indexes:     Indexes;
}

interface Indexes {
  locations: Locations;
}

interface Locations {
  queryId:      string;
  data:         Data;
  aggregations: any;
  type:         string;
}


interface Data {
  took:         number;
  timed_out:    boolean;
  _shards:      Shards;
  hits:         Hits;
  aggregations: any;
}

interface Shards {
  failed:     number;
  successful: number;
  total:      number;
  skipped:    number;
}

interface Hits {
  total:     Total;
  hits:      LocationPropsHit[];
  max_score: number;
}

export interface LocationPropsHit {
  _index:  any;
  _id:     string;
  _score:  number;
  _type:   any;
  _source: LocationProps;
}

export interface Total {
  relation: string;
  value:    number;
}
