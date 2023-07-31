import { MenuStoreModule } from './menu-store/menu-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { NavigationStoreModule } from './navigation-store/navigation-store.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    MenuStoreModule,
    NavigationStoreModule,
    StoreModule.forRoot(
      { router: routerReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production,
        }),
  ],
  providers: [],
})
export class RootStoreModule {}
