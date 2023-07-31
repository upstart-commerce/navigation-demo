import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-with-callout',
  templateUrl: './images-with-callout.component.html',
  styleUrls: ['./images-with-callout.component.scss'],
})
export class ImagesWithCalloutComponent implements OnInit {
  @Input() text;
  @Input() img;
  @Input() background_color;
  @Input() link;
  @Input() link_target;
  @Input() cta_aria_label;
  @Input() text_box_position;
  @Input() call_to_action_text;
  @Input() call_to_action_color;
  @Input() call_to_action_text_color;

  constructor() {}

  ngOnInit(): void {}
}
