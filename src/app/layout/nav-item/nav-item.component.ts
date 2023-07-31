import { MenuFacadeService } from '../../services/menu/menuFacade.service';
import {
  Component,
  OnInit,
  Renderer2,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemComponent implements OnInit {
  private _menu: Menu;
  @Input() set menu(data: Menu) {
    if (data) {
      this._menu = {
        ...data,
        attributes: {
          ...data.attributes,
          link: data.attributes.link.replace('route:<nolink>', ''),
        },
      };
    }
  }
  get menu() {
    return this._menu;
  }

  @Output() menuClick: EventEmitter<any> = new EventEmitter();
  forceHideMenu = new BehaviorSubject(true);
  toggleSubmenu = false;

  cols2 = ['2_75-25', '2_25-75', '2_33-66', '2_66-33', '2_58-42'];
  cols3 = ['3_33-33-33', '3_25-25-50', '3_50-25-25'];

  constructor(
    private renderer: Renderer2,
    private menuService: MenuFacadeService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement, 'show-submenu');
    this.forceHideMenu.next(false);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'show-submenu');
    this.forceHideMenu.next(true);
  }

  onMenuLinkClick(menu?: Menu) {
    this.menuService.setCurrentMenu(menu.productCategoryData);
    this.forceHideMenu.next(true);
    this.menuClick.emit();
  }

  returnColumnsWithItems(menu: Menu) {
    const columns = this.returnCoulumns(menu);
    const items = columns.map((item) => {
      return {
        ...item,
        items: this.returnChildrens(menu.children, item.column).map(
          (childMenu) => this.returnColumnsWithItems(childMenu),
        ),
      };
    });
    return {
      ...menu,
      columns: items,
    };
  }

  returnCoulumns(menu) {
    let columns = [];
    const subNavigation = menu.attributes.field_sub_navigation_column;
    if (!subNavigation || ['100', 'No Sub-nav'].includes(subNavigation)) {
      columns.push({ column: 1, width: 100 });
      return columns;
    }
    subNavigation
      .split('_')[1]
      .split('-')
      .forEach((item, index) => {
        columns.push({ column: index + 1, width: item });
      });
    return columns;
  }

  returnChildrens(menu, column: number) {
    const items = menu.children.filter((item) =>
      column === 1
        ? item.attributes.field_sub_level_column == column ||
          !item.attributes.field_sub_level_column
        : item.attributes.field_sub_level_column == column,
    );
    return items;
  }

  returnUrl(menu: Menu) {
    const url =
      !menu.attributes?.link || menu.attributes?.link === 'route:<nolink>'
        ? menu.productCategoryData.attributes?.link
          ? 'catalog/list' + menu.productCategoryData.attributes?.link
          : ''
        : menu.attributes.link;
    return url;
  }

  isLink(menu: Menu) {
    if (
      menu.productCategoryData.id ||
      (menu.attributes.link && !menu.attributes.link.includes('nolink'))
    ) {
      return true;
    }
    return false;
  }

  isIcon(menu: Menu) {
    if (menu.iconData.id) {
      return true;
    }
    return false;
  }

  decodeImageUrl(url: string) {
    return decodeURI(url);
  }
}
