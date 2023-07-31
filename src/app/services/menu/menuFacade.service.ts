import {
  getMenusAction,
  setCurrentMenuAction,
} from 'src/app/root-store/menu-store/actions';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/root-store/root-state';
import { Observable, map } from 'rxjs';
import {
  selectMenus,
  selectMenuIsLoading,
  selectCurrentMenu,
} from 'src/app/root-store/menu-store/selectors';
import { Menu, ProductCategoryData } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuFacadeService {
  menus$: Observable<Menu[]> = this.store.pipe(select(selectMenus)).pipe(
    map((menu) => {
      return this.withoutInactiveMenuItems(menu);
    }),
  );
  currentMenu$ = this.store.pipe(select(selectCurrentMenu));
  isLoading$: Observable<boolean> = this.store.pipe(
    select(selectMenuIsLoading),
  );

  constructor(private store: Store<RootState>) {}

  withoutInactiveMenuItems(items: Menu[]) {
    if (!items) {
      return [];
    }
    return items
      .map((item) => {
        return {
          ...item,
          children: this.withoutInactiveMenuItems(item.children),
        };
      })
      .filter((item) => item.attributes.enabled);
  }

  getMenus() {
    this.store.dispatch(getMenusAction());
  }

  setCurrentMenu(menu: ProductCategoryData | null) {
    this.store.dispatch(setCurrentMenuAction({ menu }));
  }
}
