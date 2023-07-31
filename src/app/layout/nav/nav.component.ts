import { MenuFacadeService } from '../../services/menu/menuFacade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  toggle = false;
  navigation$ = this.menuService.menus$;
  constructor(
    public menuService: MenuFacadeService,
  ) {}

  ngOnInit() {}

  onToggleMenu() {
    this.toggle = !this.toggle;
  }
}
