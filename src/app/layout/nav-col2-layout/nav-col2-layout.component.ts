import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-nav-col2-layout',
  templateUrl: './nav-col2-layout.component.html',
  styleUrls: ['./nav-col2-layout.component.scss'],
})
export class NavCol2LayoutComponent implements OnInit {
  @Input() menu: Menu | null = null;
  constructor() {}

  get hasComponents() {
    if (!this.menu) {
      return false;
    }
    return Object.values(this.menu.subMenuLayout.columns).some((column) => {
      return column.components?.length > 0;
    });
  }

  ngOnInit(): void {}
}
