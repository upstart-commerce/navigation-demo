export interface RouteSearchPayload {
  search: Search;
  tracking?: string;
  parentQueryId?: null;
}

export interface Search {
  query: Query;
  from: number;
  size: number;
  aggs: Aggs;
}

export interface Aggs {}

export interface Query {
  bool: Bool;
}

export interface Bool {
  must: Must[];
}

export interface Must {
  // query_string: QueryString;
  [key: string]: any;
}

export interface QueryString {
  query: string;
}

export interface RouteSearchResponse {
  result: Result;
}

export interface Result {
  id: string;
  displayName: string;
  access: string;
  indexes: Indexes;
}

export interface Indexes {
  [index: string]: IndexData;
}

export interface IndexData {
  queryId: string;
  data: Data;
  type: string;
  redirect?: RedirectRule;
}

export interface RedirectRule {
  path: string;
  type: string;
}

export interface Data {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
  aggregations: Aggregations;
}

export interface Shards {
  failed: number;
  successful: number;
  total: number;
  skipped: number;
}

export interface Aggregations {
  [key: string]: {
    meta: {
      source: {
        aggregation: any;
        metadata: {
          isFullySupported: boolean;
          type: string;
        };
        displayName: string;
        name: string;
      };
    };
    buckets: Bucket[];
  };
}

export interface Bucket {
  key: string | number;
  key_as_string?: string;
  doc_count: number;
  from?: number;
  to?: number;
}

export interface Hits {
  total: Total;
  hits: Hit[];
  max_score: number;
}

export interface Hit {
  _index: any;
  _id: string;
  _score: number;
  _type: Type;
  _source: any;
}

export interface Source {
  id: string;
  siteIds: string[];
  name: string;
  locationType: LocationType;
  public: boolean;
  operational: boolean;
  address: Address;
  coordinates: Coordinates;
  contactInformation: ContactInformation;
  operationHoursExceptions?: OperationHoursException[];
  dateOriginallyOpened?: string;
  remodelDates?: string[];
  media?: Media;
  externalApplicationReferences?: Aggregations;
  content?: Content[];
  dynamicProperties?: DynamicProperties;
  pricingZone: string;
  pickupAvailable: boolean;
  deliveryAvailable: boolean;
  avgRating?: number;
  numReviews: number;
  hoursOfOperation?: HoursOfOperation[];
  directionsSummary?: string;
  pickupHoursExceptions?: any[];
}

export interface Address {
  street1: string;
  city: string;
  stateOrRegion: string;
  country: Country;
  postalCode: string;
  street2?: string;
  county?: string;
}

export enum Country {
  Us = 'US',
}

export interface ContactInformation {
  phoneNumber?: string;
  primaryPhone?: string;
  emailAddress?: string;
  fax?: string;
  faxNumber?: string;
}

export interface Content {
  identifier: string;
  content: string;
  startDateTime?: string;
  endDateTime?: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface DynamicProperties {
  locationType: string;
  city?: string;
  state?: string;
  commerceEnabled?: boolean;
  showOnWeb: boolean;
  status?: string;
  showDirections?: boolean;
  sellsSleepAnimal?: boolean;
  pickupAvailable?: boolean;
  deliveryAvailable?: boolean;
  stores?: Store[];
  region?: string;
  parentLocationId?: string;
  storeNumber?: string;
  brand?: string;
  startDate?: string;
  hours?: string;
  timezone?: string;
  appointmentsAvailable?: boolean;
  consecutiveAppointments?: string;
  warehouse?: string;
}

export interface Store {
  storeId: string;
  brandId: string;
}

export interface HoursOfOperation {
  day: string;
  isOpen: boolean;
  open?: any;
  closed?: any;
}

export enum LocationType {
  Store = 'store',
  StoreCluster = 'storeCluster',
}

export interface Media {
  mapIcon: MapIcon;
}

export interface MapIcon {
  uri: string;
}

export interface OperationHoursException {
  exceptionType: ExceptionType;
  name: string;
  isOpen: boolean;
  open?: string;
  closed?: string;
}

export enum ExceptionType {
  Holiday = 'holiday',
}

export enum Type {
  Doc = '_doc',
}

export interface Total {
  relation: string;
  value: number;
}
