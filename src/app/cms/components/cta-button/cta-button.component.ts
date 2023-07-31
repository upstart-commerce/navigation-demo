import { Component, Input, OnInit } from '@angular/core';
import { GenericContent, CTAButtonAttributes } from 'src/app/models/drupal-api';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent implements OnInit {
  @Input() data: GenericContent<CTAButtonAttributes>
  constructor() { }

  get text() {
    return this.data.attributes && this.data.attributes.field_cta_text;
  }

  get size() {
    return this.data.attributes && this.data.attributes.field_cta_size;
  }

  get textColor() {
    return this.data.attributes && this.data.attributes.field_call_to_action_text_color.color;
  }

  get buttonColor() {
    return this.data.attributes && this.data.attributes.field_call_to_action_color.color;
  }

  get link() {
    return this.data.attributes && this.data.attributes.field_link.uri;
  }

  get openNewTab() {
    return this.data.attributes && this.data.attributes.field_open_in_new_tab;
  }

  ngOnInit(): void {
  }

}
