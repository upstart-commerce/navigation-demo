import { Component, Input, OnInit } from '@angular/core';
import { GenericContent, TextOptionalCTAAttributes } from 'src/app/models/drupal-api';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() data: GenericContent<TextOptionalCTAAttributes>;
  size = 'small_size';
  constructor() {}

  get text() {
    return (
      (this.data.attributes && this.data.attributes.field_text.value) || ''
    );
  }

  get buttonText() {
    return (
      this.data.attributes &&
      this.data.attributes.field_link &&
      this.data.attributes.field_link.title
    );
  }

  get textColor() {
    return (
      this.data.attributes &&
      this.data.attributes.field_call_to_action_text_color &&
      this.data.attributes.field_call_to_action_text_color.color
    );
  }

  get buttonColor() {
    return (
      this.data.attributes &&
      this.data.attributes.field_call_to_action_color &&
      this.data.attributes.field_call_to_action_color.color
    );
  }

  get buttonPosition() {
    return (
      this.data.attributes && this.data.attributes.field_text_relation_button
    );
  }

  get link() {
    return (
      this.data.attributes &&
      this.data.attributes.field_link &&
      this.data.attributes.field_link.uri
    );
  }

  get openNewTab() {
    return this.data.attributes && this.data.attributes.field_open_in_new_tab;
  }

  get hasButtonConfig() {
    return Boolean(this.link && this.buttonText);
  }

  ngOnInit(): void {}
}
