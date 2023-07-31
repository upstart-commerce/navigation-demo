export interface SearchResponse {
  items: Order[];
  page: number;
  pageSize: number;
  count: number;
  facetCounts: FacetCounts;
  queryId: string;
}

export interface FacetCounts {
  properties: Property[];
  ranges: any[];
}

export interface Property {
  property: string;
  propertyType: string;
  counts: Count[];
}

interface Count {
  value: string;
  count: number;
}

export enum OrderState {
  Processing = 'Processing',
  Suspended = 'Suspended', // On Hold
  CancelRequested = 'CancelRequested', // When Cancel Order requested and being processed
  Canceled = 'Canceled', // Order Canceled
  Completed = 'Completed', // Order Completed
  Fraud = 'Fraud', // flag an order as potentially fraudulent so I can prevent losses to the company
  New = 'New', // New, untouched orders
}

export interface OrderStateEvent {
  name: OrderState;
  from: Array<OrderState>;
  to: OrderState;
}

export enum ShipmentState {
  NEW = 'New',
  // @deprecated
  LABEL_REQUESTED = 'LabelRequested',
  // @deprecated
  LABELED = 'Labeled',
  DELIVERED = 'Delivered',
  CANCELED = 'Canceled',
  SHIPPING = 'Shipping',
  SUBMITTED = 'Submitted',
  PENDING_SUPPORT = 'PendingCustomerSupport',
  READY_TO_SHIP = 'ReadyToShip',
}

export interface Order {
  id: string;
  customerId: string;
  anonymous: boolean;
  state: OrderState;
  currency: string;
  distanceUnit: string;
  items: Item[];
  locationId: string;
  timeZoneOffset: number;
  coupons: any[];
  shippingCoordinates: ShippingCoordinates;
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  shipments: Shipment[];
  pricing: Pricing4;
  payments: Payment[];
  email?: string;
  orderDate: Date;
  internalInvoiceId?: string;
}

export interface Payment {
  id: string;
  paymentId: string;
  state: PaymentState;
  transactionId: string;
  processedDate: Date;
  refundedDate?: Date;
  value: number;
  exec: Exec | ExecPayPal;
  order?: Order;
  captureAmount?: number;
}

export type PaymentState =
  | 'Processed'
  | 'New'
  | 'Refunded'
  | 'RefundFailed'
  | 'ProcessDisabled'
  | 'Authorized'
  | 'AuthorizationFailed'
  | 'CaptureRequested'
  | 'Captured'
  | 'CaptureFailed'
  | 'Reversed'
  | 'ReverseFailed';

export interface Exec {
  authorizationCode: string;
  cardHolderName: string;
  authorizationRequestId: string;
  processingLogs: ProcessingLog[];
  type: PaymentTypes;
  financeOffer: FinanceOffer;
  cardNumber: string;

  cardType?: string;
  expirationMonth?: string;
  expirationYear?: string;
  requestId?: string;
  token?: string;
}

export interface ExecPayPal {
  payPalPayerId: string;
  payPalEmailAddress: string;
  payPalOrderId: string;
  processingLogs: ProcessingLog[];
  type: 'PayPalPaymentExec';
}

export type PaymentTypes = 'CyberSourcePaymentExec' | 'SynchronyPaymentExec';

export interface FinanceOffer {
  id: string;
  providerFinanceOfferId: string;
  name: string;
  description: string;
  termsAndConditions: string;
}

export interface ProcessingLog {
  state: string;
  date: string;
  errors: ProcessingLogError[];
  value?: number;
  transactionId?: string;
}

export interface ProcessingLogError {
  level: string;
  code: string;
  message: string;
  detail: string;
}

export interface CyberSourcePaymentExec {
  cardType: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  requestId: string;
  token: string;
  cardHolderName: string;
}

export interface CyberSourceOrderPayment extends CyberSourcePaymentExec {
  id: string;
  state: string;
  transactionId: string;
  date: Date;
  value: number;
}

interface Pricing4 {
  promotionPriceAdjustments: any[];
  totalItemsPrice: number;
  totalShippingPrice: number;
  totalTax: number;
  totalFee: number;
  totalPromotion: number;
  totalPrice: number;
}

export interface Shipment {
  id: string;
  state: ShipmentState;
  shippingMethodId: string;
  shippingMethodName: string;
  addressFrom: AddressFrom;
  locationFromId: string;
  addressTo: BillingAddress;
  locationToId?: string;
  shippingToDistance?: Weight;
  rate: Rate;
  packages: ShippingPackage[];
  pricing: Pricing3;
  trackingNumber?: string;
  labelDownload?: LabelDownload;
  packagesGroups?: ShippingPackagesGroup[];
}

export interface ExtendedShipment extends Shipment {
  availableShipmentStates: any[];
  inStateActions: string[];
}

export interface ShippingPackagesGroup {
  package: ShippingPackage;
  quantity: number;
}

interface LabelDownload {
  png: string;
  pdf: string;
  href: string;
  zpl: string;
}

interface Pricing3 {
  basePrice: number;
  promotionPriceAdjustments: any[];
  taxPriceAdjustment: TaxPriceAdjustment;
}

export interface Rate {
  rateId: string;
  carrierId: string;
  pricing: Pricing2;
  deliveryDays?: number;
  estimatedDeliveryDate?: Date;
  carrierDeliveryDates: string;
  shipDate?: Date;
  serviceType: string;
  serviceCode: string;
  carrierCode: string;
}

interface Pricing2 {
  shipping: number;
  insurance?: number;
  confirmation?: number;
  other?: number;
}

interface AddressFrom {
  street1: string;
  street2: string;
  city: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  poBox: boolean;
  name?: Name;
  phoneNumber: string;
  businessName?: string;
}

interface BillingAddress {
  street1: string;
  street2: string;
  city: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  poBox: boolean;
  businessName?: string;
  name?: Name;
  phoneNumber?: string;
}

interface ShippingAddress {
  street1: string;
  street2: string;
  city: string;
  stateOrRegion: string;
  country: string;
  postalCode: string;
  poBox: boolean;
  name: Name;
  phoneNumber: string;
}

interface Name {
  first: string;
  last: string;
}

interface ShippingCoordinates {
  latitude: number;
  longitude: number;
}

export interface Item {
  id: string;
  catalogItemId: string;
  productItemSkuId: string;
  catalogItemType: string;
  quantity: number;
  pricing: Pricing;
  catalogItem: CatalogItem;
  shipmentId: string;
  shipment?: Shipment;
  targetItemIds?: string[];
}

interface Media {
  thumb: {
    altText: string;
    uri: string;
  }
}

interface CatalogItem {
  id: string;
  typeId: string;
  type: string;
  typeName: string;
  name: string;
  brandName: string;
  tags: string[];
  dynamicProperties: DynamicProperties;
  productItems: ProductItem[];
  relatedIds: string[][];
  shippingMethodIds: string[];
  activationDate: Date;
  taxCode: string;
  ignoreInventory: boolean;
  version: number;
  seo: Seo;
  manufacturerName?: string;
  avgRating?: number;
  media?: Media;
}

interface Seo {
  pageTitle: string;
  description?: string;
  metaKeywords: any[];
}

interface ProductItem {
  skuId: string;
  name: string;
  brandName: string;
  dynamicProperties: DynamicProperties2;
  dimensions: Dimensions;
  weight: Weight;
  numPieces: number;
  shippingPackages: ShippingPackage[];
  purchasable: boolean;
}

interface ShippingPackage {
  dimensions: Dimensions;
  weight: Weight;
}

interface Weight {
  value: number;
  unit: string;
}

interface Dimensions {
  width: number;
  length: number;
  height: number;
  unit: string;
}

interface DynamicProperties2 {
  nativeSkuId: string;
  materials: string[][];
  foundationIds: any[];
  size?: Size;
  feedHighSkuPrice: number;
  color?: Color;
  mattressOfferingType?: string;
  onlineOnly?: boolean;
  price?: Price;
}

interface Price {
  price: number;
  currency: string;
}

interface Color {
  name: string;
  group: string;
  swatch: string;
}

interface Size {
  shortName: string;
  name: string;
}

interface DynamicProperties {
  sites: string[];
  shopByBrands: string[][];
  shopByCategories: (string | string)[];
  mattressTypes: string[][];
  categoryBreadcrumbs: string[];
  keywords: string[];
  featured: boolean;
  clearance: boolean;
  isFreeDelivery: boolean;
  closeOut: boolean;
  isNew: boolean;
  storeOnly: boolean;
  template: string;
  description: string;
  constructionInfo?: string;
  tagline: string;
  dmcMaterial?: string;
  feature?: string;
  productGroup?: string;
  benefits?: string[];
  additionalInfo?: string;
  comfortRating?: string;
  fill?: string;
}

interface Pricing {
  basePrice: BasePrice;
  promotionPriceAdjustments: PromotionPriceAdjustment[];
  feePriceAdjustments: FeePriceAdjustment[][];
  taxPriceAdjustment: TaxPriceAdjustment;
}

interface TaxPriceAdjustment {
  taxCode: string;
  value: number;
}

interface FeePriceAdjustment {
  id: string;
  name: string;
  quantity: number;
  baseValue: number;
  value: number;
  description: string;
}

interface PromotionPriceAdjustment {
  id: string;
  value: number;
  description: string;
}

interface BasePrice {
  type: string;
  zone: string;
  price: number;
  listPrice: number;
}

export interface IOrderNote {
  txt: string;
  author: string;
  createdDate: string;
}
