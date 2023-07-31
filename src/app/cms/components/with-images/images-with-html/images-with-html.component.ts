import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-with-html',
  templateUrl: './images-with-html.component.html',
  styleUrls: ['./images-with-html.component.css']
})
export class ImagesWithHtmlComponent implements OnInit {

  @Input() htmlValue;
  @Input() img;
  @Input() image_position;
  @Input() imgLink;
  @Input() link_target;
  @Input() img_height;
  @Input() img_width;

  constructor() { }

  ngOnInit(): void {
  }

}
