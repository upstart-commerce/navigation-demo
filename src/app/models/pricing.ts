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
}
