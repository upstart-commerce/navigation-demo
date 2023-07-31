import { MenuState } from './menu-store/state';
import { NavigationState } from './navigation-store/state';

export interface RootState {
  menu: MenuState;
  navigation: NavigationState;
}
