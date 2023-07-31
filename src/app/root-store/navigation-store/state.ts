import { GenericContent } from 'src/app/models/drupal-api';
import { Navigation, RootObject } from 'src/app/models/navigation.model';

export interface NavigationState {
  showInactive: boolean;
  collapse: boolean;
  expand: boolean;
  query: string | null;
  data: RootObject<Navigation[]> | null;
  isLoading: boolean;
  error: null;
  details: {
    data: Navigation | null;
    include: GenericContent[];
    isLoading: boolean;
    error: string | null;
  };
}

export const initialState: NavigationState = {
  data: null,
  isLoading: false,
  error: null,
  showInactive: true,
  collapse: false,
  expand: true,
  query: null,
  details: {
    data: null,
    include: [],
    isLoading: false,
    error: null,
  },
};
