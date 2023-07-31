import { createReducer, on, Action } from '@ngrx/store';
import { initialState, MenuState } from './state';
import {
  getMenusSuccessAction,
  getMenusFailureAction,
  setCurrentMenuAction,
  setMenusFromServerAction,
} from './actions';

const MenuReducer = createReducer(
  initialState,
  on(getMenusSuccessAction, (state, { menu }) => ({
    ...state,
    data: menu,
  })),
  on(setMenusFromServerAction, (state, { menu }) => ({
    ...state,
    data: menu,
  })),
  on(getMenusFailureAction, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  })),

  on(setCurrentMenuAction, (state, { menu }) => {
    return {
      ...state,
      oldMenu: !state.currentMenu ? menu : state.currentMenu,
      currentMenu: menu,
    };
  }),
);

export function reducer(state: MenuState | undefined, action: Action) {
  return MenuReducer(state, action);
}
