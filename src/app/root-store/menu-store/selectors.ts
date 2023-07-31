import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../root-state';
import { MenuState } from './state';
import { Menu } from 'src/app/models/menu';

export const selectMenu = createFeatureSelector<RootState, MenuState>('menu');

export const selectMenus = createSelector(
  selectMenu,
  (state: MenuState): Menu[] => {
    return state.data;
  },
);

export const selectMenuIsLoading = createSelector(
  selectMenu,
  (state: MenuState): boolean => {
    return state.isLoading;
  },
);

export const selectCurrentMenu = createSelector(
  selectMenu,
  (state: MenuState) => {
    return state.currentMenu;
  },
);
export const selectOldMenu = createSelector(selectMenu, (state: MenuState) => {
  return state.oldMenu;
});
