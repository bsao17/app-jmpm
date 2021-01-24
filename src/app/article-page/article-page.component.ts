import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  id: number;
  dataApiTitle: string;
  dataApiContent: object;
  dataApiAuthors: string;
  dataApiDate: string;

  constructor(private router: Router, public httpClient: HttpClient) { }

  ngOnInit(): void {
    const url: string = this.router.url;
    const urlArray: any[] = url.split('/');
    // tslint:disable-next-line:radix
    this.id = parseInt(urlArray[3]);
    this.getDataById();
  }
  getDataById(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets/${this.id}`)
      .subscribe(
        (response) => {
          // @ts-ignore
          ({content: this.dataApiContent, title: this.dataApiTitle, authors: this.dataApiAuthors} = response);
        },
        (error) =>  console.log(error),
        () => console.log('complete')
      );
  }
}
