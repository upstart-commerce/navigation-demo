import { createReducer, on, Action } from '@ngrx/store';
import { initialState } from 'src/app/root-store/navigation-store/state';
import {
  getNavigationAction,
  getNavigationFailureAction,
  getNavigationSuccessAction,
} from './actions';

const navigationReducer = createReducer(
  initialState,
  on(getNavigationAction, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(getNavigationSuccessAction, (state, { items }) => {
    return {
      ...state,
      isLoading: false,
      data: items,
    };
  }),

  on(getNavigationFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
);

export function reducer(state: any, action: Action) {
  return navigationReducer(state, action);
}
