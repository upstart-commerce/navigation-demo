import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MenusEffects } from './effects';
import { reducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('menu', reducer),
    EffectsModule.forFeature([MenusEffects]),
  ],
  providers: [MenusEffects],
})
export class MenuStoreModule {}
