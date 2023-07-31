import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu, ProductCategoryData } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenus() {
    return this.http.get<Array<Menu>>(
      `${environment.categoriesApi}/navigation`,
      {
        headers: {
          'X-Upstart-Site': environment.siteId
        }
      }
    );
  }

  findCategory(path: string) {
    return this.http.get<ProductCategoryData>(environment.categoryApi, {
      params: {
        q: '/' + path,
      },
    });
  }

  getMenu(url: string) {
    return this.http.get(url);
  }
}
