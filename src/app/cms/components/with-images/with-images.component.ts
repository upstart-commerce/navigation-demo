import { ComponentStyles } from 'src/app/models/component-styles';
import { GenericContent } from 'src/app/models/drupal-api';
import { Component, Input, OnInit } from '@angular/core';

enum componentsMap {
  image_with_callout,
  image_with_html,
  image_with_text_and_cta,
}

@Component({
  selector: 'app-with-images',
  templateUrl: './with-images.component.html',
  styleUrls: ['./with-images.component.scss'],
})
export class WithImagesComponent implements OnInit {
  componentsMap = componentsMap;

  @Input() data: GenericContent<any>;
  style: ComponentStyles;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data?.attributes?.field_images_layout, ':', this.data);
    console.log(
      'data?.attributes?.field_images_layout:',
      this.data?.attributes?.field_images_layout ==
        componentsMap[componentsMap.image_with_callout],
    );
  }

  get mobileImage() {
    return this.data?.relationships?.['field_image_mobile']?.data?.meta?.url;
  }

  get desktopImage() {
    return this.data?.relationships?.['field_image']?.data?.meta?.url;
  }

  get image_position_column() {
    return this.data.attributes?.field_image_position_column;
  }
  get link_target() {
    return this.data.attributes?.field_open_in_new_tab ? '_blank' : '_self';
  }

  get width() {
    return this.data.attributes?.field_width;
  }

  get height() {
    return this.data.attributes?.field_height;
  }

  get mobile_height() {
    return this.data.attributes?.field_mobile_height;
  }
  get mobile_width() {
    return this.data.attributes?.field_mobile_width;
  }

  get htmlValue() {
    return this.data.attributes?.field_html_attribute_options?.processed;
  }

  get text() {
    return this.data.attributes?.field_text?.processed;
  }

  get calloutImgLink() {
    return this.data.attributes?.field_link_image?.uri;
  }

  get link() {
    return this.data.attributes?.field_link?.uri;
  }

  get text_box_position() {
    return this.data.attributes?.field_text_box_position;
  }

  get text_box_position_vertical() {
    return this.data.attributes?.field_text_box_position_vertical;
  }

  get call_to_action_text() {
    return this.data.attributes?.field_call_to_action_text;
  }

  get call_to_action_color() {
    return this.data.attributes?.field_call_to_action_color?.color;
  }

  get call_to_action_text_color() {
    return this.data.attributes?.field_call_to_action_text_color?.color;
  }

  get cta_aria_label() {
    return this.data.attributes?.field_cta_aria_label;
  }

  get background_color() {
    return this.data.attributes?.field_background_color?.color;
  }
}
