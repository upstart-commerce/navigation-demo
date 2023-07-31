import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-with-text-and-cta',
  templateUrl: './images-with-text-and-cta.component.html',
  styleUrls: ['./images-with-text-and-cta.component.css']
})
export class ImagesWithTextAndCtaComponent implements OnInit {

  @Input() text;
  @Input() img;
  @Input() link;
  @Input() link_target;
  @Input() img_height;
  @Input() img_width;
  @Input() text_box_position;
  @Input() text_box_position_vertical;
  @Input() call_to_action_text;
  @Input() call_to_action_color;
  @Input() call_to_action_text_color;

  constructor() { }

  ngOnInit(): void {
  }

}
