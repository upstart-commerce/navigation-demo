import { Component } from '@angular/core';
import { MenuFacadeService } from './services/menu/menuFacade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-demo';

  constructor(private menuService: MenuFacadeService) {
    this.menuService.getMenus();
  }
}
