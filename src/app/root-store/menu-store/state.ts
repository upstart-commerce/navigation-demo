import { Menu, ProductCategoryData } from 'src/app/models/menu';
export interface MenuState {
  data: any | null;
  currentMenu: ProductCategoryData | null;
  oldMenu: ProductCategoryData | null;
  isLoading: boolean;
  error: string;
}

export const initialState: MenuState = {
  data: null,
  currentMenu: null,
  oldMenu: null,
  isLoading: false,
  error: null,
};
