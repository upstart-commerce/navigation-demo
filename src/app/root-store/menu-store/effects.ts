import { TransferState } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { NEVER, of, Subject } from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  getMenusAction,
  getMenusSuccessAction,
  getMenusFailureAction,
} from './actions';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MenuFacadeService } from 'src/app/services/menu/menuFacade.service';

@Injectable()
export class MenusEffects {
  stopPolling$: Subject<boolean> = new Subject();

  constructor(
    private actions$: Actions,
    private menuService: MenuService,
    private categoryFacade: MenuFacadeService,
  ) {}

  getCategoriesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMenusAction),
      withLatestFrom(this.categoryFacade.menus$),
      switchMap(([action, categories]) => {
        if (categories && categories.length > 0) {
          return NEVER;
        }
        return this.menuService.getMenus().pipe(
          map((menu) => {
            return getMenusSuccessAction({ menu });
          }),
          catchError((error) => of(getMenusFailureAction({ error }))),
        );
      }),
    );
  });
}
