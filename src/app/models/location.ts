export interface LocationBase {
    id: string;
    type: string;
    siteIds: string[];
    name: string;
    locationType: string;
    public: boolean;
    operational: boolean;
    address: Address;
    coordinates: ICoordinates;
    contactInformation: ContactInformation;
    operationHoursExceptions?: OperationHoursException[];
    pickupHoursExceptions?: OperationHoursException[];
    dateOriginallyOpened?: string;
    remodelDates?: string[];
    media?: Media;
    directionsSummary?: string;
    dynamicProperties: DynamicProperty;
    pickupAvailable: boolean;
    deliveryAvailable: boolean;
    pricingZone?: string;
  }
  
  export interface LocationProps extends LocationBase {
    hoursOfOperation: HoursOfOperation[];
    pickupHours?: HoursOfOperation[];
    content: Content[];
    externalApplicationReferences?: { key: string; value: string };
  }
  
  export interface LocationDetails extends LocationBase {
    hoursOfOperationSets: HoursOfOperationSet[];
    pickupHoursSets: HoursOfOperationSet[];
    content: DetailsContent[];
    externalApplicationReferences: { key: string; value: string }[];
  }
  
  export interface LocationsMap {
    [key: string]: LocationProps;
  }
  
  export interface DynamicProperty {
    [key: string]: any;
  }
  
  // export interface ReviewsAndRatings {
  //   rating1: string;
  // }
  
  export interface Content {
    identifier: string;
    content: string;
    startDateTime?: string;
    endDateTime?: string;
  }
  
  export interface DetailsContent {
    identifier: string;
    content: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  }
  
  export interface ExternalApplicationReferences {
    googleApiKey: string;
    facebookPageManagement: string;
  }
  
  export interface Media {
    smallStoreFront: string;
    largeStoreFront: string;
    smallInterior: string;
    mapIcon?: {
      uri: string;
    };
  }
  
  export interface OperationHoursException {
    exceptionType: string;
    name: string;
    isOpen: boolean;
    open?: string;
    closed?: string;
  }
  
  export interface HoursOfOperation {
    day: string;
    isOpen: boolean;
    open?: string;
    closed?: string;
  }
  
  export interface HoursOfOperationSet {
    days: string[];
    isOpen: boolean;
    open?: string;
    closed?: string;
  }
  
  export interface ContactInformation {
    phoneNumber: string;
    faxNumber?: string;
    emailAddress?: string;
  }
  
  export interface ICoordinates {
    latitude: number;
    longitude: number;
    lat?: number;
    lng?: number;
  }
  
  export interface Coordinates {
    coordinates: ICoordinates;
    id: string;
    type: string;
    name: string;
    media?: any;
  }
  
  export interface Address {
    street1: string;
    street2?: string;
    city: string;
    county?: string;
    stateOrRegion: string;
    postalCode: string;
    country: string;
    name: Name;
    phoneNumber: string;
    poBox: boolean;
    label: string;
  }
  
  export interface LocationDetailsFormDialogData {
    mode: string;
    details: LocationProps;
  }
  
  export enum PartialLocationDetailsProp {
    coordinates = 'coordinates', // Add more prop names corresponding to properties in Location Details;
  }
  
  export type PartialLocationDetailsPropValue = Coordinates; // Add more types of values of partial Location Details, if needed.
  
  export interface PartialLocationDetailsPayload {
    prop: PartialLocationDetailsProp;
    value: PartialLocationDetailsPropValue;
  }
  
  export interface Property {
    propertyType: string;
    property: string;
    counts: any[];
  }
  
  export interface FacetCounts {
    properties: Property[];
    ranges: any[];
  }
  
  export interface ILocationRes {
    items: any[];
    page: number;
    pageSize: number;
    count: number;
    facetCounts: FacetCounts;
  }

  export interface Name {
    first: string;
    last: string;
  }
  