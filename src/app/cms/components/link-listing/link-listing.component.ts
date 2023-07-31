import { Component, Input, OnInit } from '@angular/core';
import { GenericContent, LinkListingAttributes } from 'src/app/models/drupal-api';

@Component({
  selector: 'app-link-listing',
  templateUrl: './link-listing.component.html',
  styleUrls: ['./link-listing.component.scss']
})
export class LinkListingComponent implements OnInit {
  @Input() data: GenericContent<LinkListingAttributes>
  constructor() { }

  get orientation() {
    return this.data.attributes.field_orientation;
  }

  get linksColumn() {
    return this.data.relationships.field_links_columns.data
  }

  ngOnInit(): void {
  }

  fieldLinks(field) {
    return field.relationships.field_links.data
  }

}
