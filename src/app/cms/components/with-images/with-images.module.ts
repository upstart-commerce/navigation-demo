import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithImagesComponent } from './with-images.component';
import { ImagesWithHtmlComponent } from './images-with-html/images-with-html.component';
import { ImagesWithCalloutComponent } from './images-with-callout/images-with-callout.component';
import { ImagesWithTextAndCtaComponent } from './images-with-text-and-cta/images-with-text-and-cta.component';



@NgModule({
  declarations: [
    WithImagesComponent,
    ImagesWithHtmlComponent,
    ImagesWithCalloutComponent,
    ImagesWithTextAndCtaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WithImagesComponent
  ]
})
export class WithImagesModule { }
