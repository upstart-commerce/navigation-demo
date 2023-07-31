import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GenericContent, RemoteMedia } from './../../../models/drupal-api';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-media',
  templateUrl: './remote-media.component.html',
  styleUrls: ['./remote-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoteMediaComponent implements OnInit {

  @Input() data: GenericContent<RemoteMedia>

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {

  }

  bypassHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  bypassUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getClass() {
    const param  = this.data.attributes.field_media_link.uri;
    if(param.includes('youtube.com'))
      return 'youtube-container'

    if(param.includes('instagram.com'))
      return 'instagram-container'

    if(param.includes('facebook.com' || 'fb.com'))
      return 'facebook-container'

    if(param.includes('spotify.com'))
      return 'spotify-container'


    return '';
  }

}
