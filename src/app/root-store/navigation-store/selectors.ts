import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { NavigationState } from './state';

export const selectNavigationState: MemoizedSelector<any, NavigationState> =
  createFeatureSelector<NavigationState>('navigation');

export const selectNavigationData = createSelector(
  selectNavigationState,
  (state) => state.data,
);
export const selectNavigation = createSelector(
  selectNavigationData,
  (state) => state?.data || [],
);
export const selectNavigationIncludedData = createSelector(
  selectNavigationData,
  (state) => state?.included || [],
);
export const selectNavigationIsLoading = createSelector(
  selectNavigationState,
  (state) => state.isLoading,
);
