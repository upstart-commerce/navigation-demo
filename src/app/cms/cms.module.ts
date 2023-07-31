import { NgModule } from '@angular/core';
import { CMSRoutingModule } from './cms-routing.module';
import { CommonModule } from '@angular/common';
import { CmsComponentsModule } from './components/cms-components.module';
import { WithImagesModule } from './components/with-images/with-images.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CMSRoutingModule,
    CmsComponentsModule,
    WithImagesModule
  ]
})
export class CmsModule { }
