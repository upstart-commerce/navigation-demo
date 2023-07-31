import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-nav-col3-layout',
  templateUrl: './nav-col3-layout.component.html',
  styleUrls: ['./nav-col3-layout.component.scss'],
})
export class NavCol3LayoutComponent implements OnInit {
  private _menu: Menu | null = null;
  @Input() set menu(data: Menu | null) {
    this._menu = data;
  }
  get menu() {
    return this._menu;
  }

  constructor() {}

  get sliceParams() {
    if (this.menu.children?.length > 0) {
      const base = Math.floor(this.menu.children.length / 3);
      if (this.menu.children.length % 3 <= 1) {
        return [
          [0, base],
          [base, base * 2],
          [base * 2, this.menu.children.length],
        ];
      }
      return [
        [0, base],
        [base, base * 2 + 1],
        [base * 2 + 1, this.menu.children.length],
      ];
    }
    return [];
  }

  ngOnInit(): void {}

  get hasComponents() {
    if (!this.menu) {
      return false;
    }
    return Object.values(this.menu.subMenuLayout.columns).some((column) => {
      return column.components?.length > 0;
    });
  }
}
