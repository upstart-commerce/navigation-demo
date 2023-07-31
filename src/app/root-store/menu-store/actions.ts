import { createAction, props } from '@ngrx/store';
import { Menu, ProductCategoryData } from 'src/app/models/menu';

export enum ActionTypes {
  GET_Menus_REQUEST = '[Menu] GET Menus Request',
  GET_Menus_SUCCESS = '[Menu] GET Menus Success',
  GET_Menus_FAILURE = '[Menu] GET Menus Failure',

  SET_MENU_FROM_SERVER = '[Menu] Set Menu From Server',

  SET_CURRENT_MENU = '[Menu] Set Current Menu',
}

export const getMenusAction = createAction(ActionTypes.GET_Menus_REQUEST);
export const getMenusFailureAction = createAction(
  ActionTypes.GET_Menus_FAILURE,
  props<{ error: string }>(),
);
export const getMenusSuccessAction = createAction(
  ActionTypes.GET_Menus_SUCCESS,
  props<{ menu: Menu[] }>(),
);

export const setMenusFromServerAction = createAction(
  ActionTypes.SET_MENU_FROM_SERVER,
  props<{ menu: Menu[] }>(),
);

export const setCurrentMenuAction = createAction(
  ActionTypes.SET_CURRENT_MENU,
  props<{ menu: ProductCategoryData | null }>(),
);
