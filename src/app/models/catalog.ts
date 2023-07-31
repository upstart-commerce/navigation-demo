export type Templates = 'sizecolor' | 'mattress' | 'Option_Only' | 'simple';
export interface ICatalogProductDynamicProperties {
  sites: string[];
  shopByBrands: any[];
  shopByCategories: string[];
  mattressTypes: any[];
  categoryBreadcrumbs: string[];
  keywords: string[];
  featured: boolean;
  clearance: boolean;
  isFreeDelivery: boolean;
  isNew: boolean;
  storeOnly: boolean;
  description: string;
  additionalInfo: string;
  constructionInfo: string;
  pageTitle: string;
  seoDescription: string;
  itemType: string;
  productGroup: string;
  template: Templates;
  size?: {
    [key: string]: string;
  };
  color?: {
    [key: string]: string;
  };
}

export interface ICatalogProductItem {
  id?: string;
  skuId: string;
  name: string;
  brandName: string;
  manufacturerName: string;
  images: string;
  tags: string;
  dynamicProperties: string;
  ignoreInventory: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ICatalogProductImages {}

export interface ICatalogProduct {
  id?: string;
  typeId: string;
  type: string;
  typeName: string;
  name: string;
  brandName: string;
  tags: string[];
  dynamicProperties: Partial<ICatalogProductDynamicProperties>;
  images?: ICatalogProductImages[];
  media?: any;
  productItems: IProductItem[];
  relatedIds: string[];
  shippingMethodIds: string[];
  activationDate?: Date;
  taxCode: string;
  ignoreInventory: boolean;
  version: number;
  seo: ICatalogProductSeo;
  manufacturerName?: string;
  avgRating?: number;
  liveDate?: string;
  modifiedDate?: string;
  related?: ICatalogProduct[];
  hidden?: boolean;
  deactivationDate?: Date;
}

export interface ICatalogProductSeo {
  pageTitle: string;
  description?: string;
  metaKeywords: any[];
}

export interface IProductItem {
  skuId: string;
  name: string;
  tags: string[];
  dynamicProperties: Partial<ICatalogProductDynamicProperties>;
  dimensions: IDimensions;
  weight: IWeight;
  numPieces: number;
  purchasable: boolean;
  shippingPackages: IShippingPackage[];
  shippingMethodIds?: string[];
  pieces?: IPiece[];
  pricing?: {
    price: number;
    currency: string;
  };
  salePrice?: number;
  media: any;
}

export interface IShippingPackage {
  weight: IWeight;
  dimensions: IDimensions;
}

export interface IWeight {
  value: number;
  unit: string;
}

export interface IDimensions {
  width: number;
  length: number;
  height: number;
  unit: string;
}

export interface IPiece {
  weight: IWeight;
  dimensions: IDimensions;
}

export interface ICatalogItemType {
  id: string;
  type: string;
  name: string;
  dynamicPropertiesDec: TCatalogItemTypeDynamicPropertiesDec;
}

export type TCatalogItemTypeDynamicPropertiesDec = any;

export interface IProductItemInventory {
  assetId: string;
  inventoryItems: IProductItemInventoryItem[];
}

export interface IProductItemInventoryItem {
  type: string;
  locationId: string;
  currentQuantity: number;
  lowVolumeThreshold: number;
  bypassInventory: boolean;
}

export interface IShippingMethod {
  name: string;
  id: string;
  taxCode: string;
}

export type TAuditEvent =
  | 'CatalogItemMadeLiveEvent'
  | 'CatalogItemMadeNotLiveEvent';

export interface IAudit {
  id: string;
  event: TAuditEvent;
  entityId: string;
  audit: AuditDetails;
}

export interface AuditDetails {
  byId: string;
  by: string;
  byAnonymous: boolean;
  at: string;
  traceId: string;
  serviceName: string;
  serviceVersion: string;
}

export interface ICatalogItemType {
  id: string;
  type: string;
  name: string;
  media: any;
  dynamicPropertiesDec: any;
  feeIds: string[];
}

export interface PricingByZone {
  assetId: string;
  currency: string;
  listPrice: number;
  msrpPrice: number;
  salePrice?: number;
  zone: string;
}

export interface Pricing {
  assetId: string;
  msrpPrices: Price[];
  listPrices: Price[];
  salePrices: Price[];
}

export interface Price {
  zone: string;
  price: number;
  currency: string;
  deactivationDate?: string;
  activationDate?: string;
}

export interface ICatalogProductWithShippingMethods extends ICatalogProduct {
  shippingMethods: IShippingMethod[];
}

export interface ICatalogProductWithPricings extends ICatalogProduct {
  pricings: Pricing[];
}

export interface SuggestionResult {
  items: SuggestedItem[];
}

export interface Item {
  property: string;
  propertyType: string;
  suggestions: Suggestion[];
}

export interface Suggestion {
  term: string;
  weight: number;
  payload: string;
}

export interface SuggestedItem {
  score: number;
  id: string;
  field: string;
  term: string;
  highlighted: string;
  source: Source;
}

export interface Source {
  id: string;
  name: string;
  manufacturerName?: string;
}
