import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  pages$: Observable<any[]> = this.pageService.getBottomLinks().pipe(
    filter(links => Boolean(links)),
    map(pages => {
      return pages.filter(p => {
        if (p) {
          return (p.data).attributes.status
        }
        return false;
      })
    }),
  );

  constructor(private pageService: PagesService) {}

  ngOnInit() {}
}
