import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
    'https://vimeo.com/23374724'
    'https://www.youtube.com/watch?v=0SqWv0Yrfjw'
    */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private vimeoAPI = 'https://vimeo.com/api/oembed.json?url=';
  private validExtensions = ['mp4', 'avi', 'mpg', 'wmv', 'rmvb', 'mkv', '3gp', 'mov', 'flv'];

  constructor(protected _httpClient: HttpClient) {
    
    this.checkVideoUrl('https://vimeo.com/23374724i')
      .then(response => {
        console.log('test use:', response );
      });


   }

  ngOnInit() {
  }


  async checkVideoUrl(url) {
    switch (true) {
      case this.checkYoutubeVideo(url):
        return 'Youtube';
      case this.checkFileVideo(url):
        return 'file';
    }
    const result = await this.checkVimeoVideo(url);
    return new Promise(resolve => {
      if(result)
          resolve('vimeo');
    })
  }

  /**
   * Check if url is a youtube link
   * @param url
   */
  checkYoutubeVideo(url) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? true : false;
  }

  /**
   * Check if url is a vimeo link
   * @param url
   */
  checkVimeoVideo(url: string) {
    return new Promise((resolve) => {
      this._httpClient.get(this.vimeoAPI + url)
        .subscribe(() => {
          resolve( true ) ;
        });
    });
  }

  /**
   * Check if url is a video file link
   * @param url
   */
  checkFileVideo(url) {
    let re = url.split('.').pop();
    return this.validExtensions.indexOf(re) > -1;
  }


                                                                                                    
}
