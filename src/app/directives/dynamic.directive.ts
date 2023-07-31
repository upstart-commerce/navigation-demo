import { RemoteMediaComponent } from './../cms/components/remote-media/remote-media.component';
import { Subject } from 'rxjs';
import {
  ComponentRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from '../cms/components/text/text.component';
import { CtaButtonComponent } from '../cms/components/cta-button/cta-button.component';
import { WithImagesComponent } from '../cms/components/with-images/with-images.component';

const componentsMap = {
  "paragraph--text": TextComponent,
  "paragraph--component_text_box": TextComponent,
  "paragraph--component_cta_button": CtaButtonComponent,
  "paragraph--remote_media": RemoteMediaComponent,
  "paragraph--component_with_images": WithImagesComponent,

  // add other components here
}

@Directive({
  selector: '[appCMSComponent]',
})
export class DynamicDirective implements OnInit, OnDestroy {
  destroy$ = new Subject();
  @Input() appCMSComponent: any;
  componentRef: ComponentRef<any>;
  constructor(
    public viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const component = componentsMap[this.appCMSComponent.type];
    this.componentRef = this.viewContainerRef.createComponent(component);
    this.componentRef.instance.data = this.appCMSComponent;
  }

  destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.viewContainerRef.clear();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroyComponent();
  }
}
