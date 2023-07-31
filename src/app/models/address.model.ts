export interface Address {
  businessName?:string,
  city:string,
  country:string,
  county?:string,
  label:string,
  name: {
    first : string,
    last : string,
    middleInitial? : string,
    salutation? : string,
    suffix? : string
  },
  phoneNumber?: string,
  poBox: false,
  postalCode: string,
  stateOrRegion: string,
  street1: string,
  street2?: string,
}
