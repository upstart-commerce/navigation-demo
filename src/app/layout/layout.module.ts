import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavCol2LayoutComponent } from './nav-col2-layout/nav-col2-layout.component';
import { NavCol3LayoutComponent } from './nav-col3-layout/nav-col3-layout.component';
import { RouterModule } from '@angular/router';
import { DynamicDirective } from '../directives/dynamic.directive';
import { CmsModule } from '../cms/cms.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    NavItemComponent,
    NavCol2LayoutComponent,
    NavCol3LayoutComponent,
    DynamicDirective,
  ],
  imports: [CommonModule, RouterModule, CmsModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
