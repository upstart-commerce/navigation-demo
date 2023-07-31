export interface Add2CartPayload {
  catalogItemId: string;
  productName: string;
  productItemSkuId: string;
  quantity: number;
  shippingMethodId: string;
}

export interface Add2CartResponse {
  id: string;
  itemIds: string[];
}

export interface Cart {
  id: string;
  customerId: string;
  anonymous: boolean;
  state: string;
  currency: string;
  distanceUnit: string;
  items: CartItem[];
  locationId: string;
  postalCode: string;
  stateOrRegion: string;
  country: string;
  timeZoneOffset: number;
  coupons: ICoupon[];
  shippingCoordinates: ShippingCoordinates;
  shipments: Shipment[];
  pricing: CartPrice;
  payments: Payments[];
  tax: Tax;
  errors: any[];
  shippingAddress?: Address;
  billingAddress?: Address;
  email?: string;
}

export interface ICoupon {
  id: string;
  applied: boolean;
  applyStatus?: string;
  promotionId: string;
}

export interface Tax {
  transactionCode: string;
  state: string;
}

export interface CartPrice {
  promotionPriceAdjustments: PromotionPriceAdjustment[];
  totalItemsPrice: number;
  totalItemsBasePrice: number;
  totalShippingPrice: number;
  totalShippingBasePrice: number;
  totalFee: number;
  totalTax: number;
  totalShippingPromotion: number;
  totalItemCartPromotion: number;
  totalPromotion: number;
  totalPrice: number;
  totalPreTaxPrice: number;
}

export interface PromotionPriceAdjustment {
  id: string;
  value: number;
  description: string;
}

export interface Shipment {
  id: string;
  shippingMethodId: string;
  shippingMethodName: string;
  addressFrom: Address;
  locationFromId: string;
  addressTo: Address;
  locationToId: string;
  shippingToDistance: Weight;
  rateServiceCode: string;
  rateVariants: RateVariant[];
  packages: ShippingPackage[];
  pricing: ShipmentPrice;
}

export interface ShipmentPrice {
  basePrice: number;
  promotionPriceAdjustments: any[];
  taxPriceAdjustment: TaxPriceAdjustment;
}

export interface RateVariant {
  rateId: string;
  carrierId: string;
  pricing: RateVariantPrice;
  carrierDeliveryDates: string;
  serviceType: string;
  serviceCode: string;
  carrierCode: string;
}

export interface RateVariantPrice {
  shipping: number;
}

export interface Address {
  label?: string;
  street1: string;
  street2?: string;
  city: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  poBox?: boolean;
  phoneNumber: string;
  businessName?: string;
  name?: Name;
}

export interface Name {
  first: string;
  last: string;
}

export interface ShippingCoordinates {
  latitude: number;
  longitude: number;
}

export interface CartItem {
  id: string;
  catalogItemId: string;
  productItemSkuId: string;
  quantity: number;
  pricing: CartPricing;
  catalogItem: CatalogItem;
  shipmentId: string;
  price?: any;
  error?: any;
  errors?: any[];
}

export interface CatalogItem {
  id: string;
  typeId: string;
  type: string;
  typeName: string;
  name: string;
  brandName: string;
  manufacturerName: string;
  tags: string[];
  dynamicProperties: CatalogItemDynamicProperties;
  productItems: ProductItem[];
  relatedIds: any[];
  shippingMethodIds: string[];
  activationDate: string;
  taxCode: string;
  ignoreInventory: boolean;
  hidden: boolean;
  version: number;
  seo: Seo;
  productItem?: ProductItem;
  media: any;
}

export interface Seo {
  pageTitle: string;
  metaKeywords: any[];
}

export interface ProductItem {
  skuId: string;
  name: string;
  brandName: string;
  dynamicProperties: ProductItemDynamicProperties;
  dimensions: Dimensions;
  weight: Weight;
  numPieces: number;
  shippingPackages: ShippingPackage[];
  purchasable: boolean;
  media: any;
}

export interface ShippingPackage {
  dimensions: Dimensions;
  weight: Weight;
}

export interface Weight {
  value: number;
  unit: string;
}

export interface Dimensions {
  width: number;
  length: number;
  height: number;
  unit: string;
}

export interface ProductItemDynamicProperties {
  size: Size;
}

export interface Size {
  name: string;
  shortName: string;
}

export interface CatalogItemDynamicProperties {
  tagline: string;
  description: string;
  additionalInfo: string;
  productGroup: string;
  features: string[];
  isNew: boolean;
  template: string;
}

export interface CartPricing {
  basePrice: BasePrice;
  promotionPriceAdjustments: any[];
  feePriceAdjustments: any[];
  taxPriceAdjustment: TaxPriceAdjustment;
}

export interface TaxPriceAdjustment {
  taxCode: string;
  value: number;
}

export interface BasePrice {
  type: string;
  zone: string;
  price: number;
  listPrice: number;
}

export interface Payments {
  exec: PaymentExec;
  id: string;
  state: string;
  value: number;
}

export interface PaymentExec {
  procesingLogs: any;
  token: string;
  type: string;
  expirationMonth: string;
  expirationYear: string;
}
