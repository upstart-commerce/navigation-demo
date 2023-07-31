export interface IToken {
  iat: number;
  userId: string;
  login: string;
  tenantMap: TenantMap;
  isAnonymous: boolean;
  tpe: string;
}

interface TenantMap {
  [key: string]: {
    roles: string[];
  };
}

export interface Customer {
  id?: string;
  login?: string;
  name: Name;
  emailAddresses?: EmailAddresses;
  addresses?: Addresses;
  birthDate?: string;
  originationDate?: string;
  registrationDate?: string;
  version?: number;
  previousPasswords?: any[];
}
export interface CustomerUpdateRequest {
  birthDate: string,
  gender?: string,
  name: {
    first: string,
    last: string,
    middleInitial?: string,
    salutation?: string,
    suffix?: string
  }
}

export interface ChangePassword {
  newPassword: string,
  oldPassword: string,
}

export interface Addresses {
  defaultBilling: DefaultBilling;
  defaultShipping: DefaultBilling;
  addresses: Address2[];
}

export interface CreditCard{
  cardNumber: number;
  cardType: string;
  expirationMonth: number;
  expirationYear: number;
  label: string;
  token: string;
}

interface Address2 {
  label: string;
  name: AddressName;
  street1: string;
  city: string;
  county: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
}

interface AddressName {
  first: string;
  last: string;
}

interface DefaultBilling {
  label: string;
  name: BillingName | null;
  street1: string;
  street2?: string;
  city: string;
  county?: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  businessName?: string;
  poBox?: boolean;
}

interface BillingName {
  salutation: string;
  first: string;
  last: string;
}

interface EmailAddresses {
  default: Default;
  addresses: Address[];
}

interface Address {
  label: string;
  address: string;
  isValidated: boolean;
}

interface Default {
  label: string;
  address: string;
}

interface Name {
  salutation: string;
  first: string;
  middleInitial: string;
  last: string;
  suffix: string;
}
