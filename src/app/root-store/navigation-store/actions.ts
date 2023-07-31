import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  GET_NAVIGATION_ACTION = '[CMS] Get Navigation Action',
  GET_NAVIGATION_SUCCESS_ACTION = '[CMS] Get Navigation Success Action',
  GET_NAVIGATION_FAILURE_ACTION = '[CMS] Get Navigation Failure Action',
}

export const getNavigationAction = createAction(
  ActionTypes.GET_NAVIGATION_ACTION,
);
export const getNavigationSuccessAction = createAction(
  ActionTypes.GET_NAVIGATION_SUCCESS_ACTION,
  props<{ items: any; included?: any[] }>(),
);
export const getNavigationFailureAction = createAction(
  ActionTypes.GET_NAVIGATION_FAILURE_ACTION,
  props<{ error: any }>(),
);
