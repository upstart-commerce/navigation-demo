import { NgModule } from '@angular/core';
import { TagsComponent } from './tags/tags.component';
import { TextComponent } from './text/text.component';


import { CommonModule } from '@angular/common';

import { CtaButtonComponent } from './cta-button/cta-button.component';
import { RemoteMediaComponent } from './remote-media/remote-media.component';



@NgModule({
  declarations: [
    TagsComponent,
    TextComponent,
    CtaButtonComponent,
    RemoteMediaComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CmsComponentsModule { }
