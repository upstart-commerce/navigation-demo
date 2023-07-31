import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NavigationEffects } from './effects';
import { reducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('navigation', reducer),
    EffectsModule.forFeature([NavigationEffects]),
  ],
  providers: [NavigationEffects],
})
export class NavigationStoreModule {}
