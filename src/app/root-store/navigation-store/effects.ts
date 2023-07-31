import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, switchMap, map, catchError, of, mergeMap } from 'rxjs';
import {
  getNavigationAction,
  getNavigationSuccessAction,
  getNavigationFailureAction,
} from './actions';
import { MenuService } from 'src/app/services/menu/menu.service';
import {
  GenericContent,
  Navigation,
  RootObject,
} from 'src/app/models/navigation.model';

@Injectable()
export class NavigationEffects {
  constructor(
    private actions$: Actions,
    private menuService: MenuService,
  ) {}

 
}
