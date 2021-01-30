import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Globalservices} from '../service/globalservices';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  idBillet: number;
  comments: any[];
  commentsNumber: number;
  commentContent: any;
  commentDate: Date;
  dataApiTitle: string;
  dataApiContent: object;
  dataApiAuthors: string;
  dataApiDateTime: string;
  dataApiImg: string;
  responseUser: any;

  constructor(private router: Router, public httpClient: HttpClient, public globalServices: Globalservices) {
  }

  ngOnInit(): void {
    const url: string = this.router.url;
    const urlArray: any[] = url.split('/');
    this.idBillet = Number(urlArray[3]);
    this.getDataById();
    this.getIdBilletOfComments();
    this.getUsers();
  }
  // GET Billets from API
  getDataById(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets/${this.idBillet}`)
      .subscribe(
        (response) => {
          // @ts-ignore
          ({content: this.dataApiContent,
            // @ts-ignore
            title: this.dataApiTitle,
            // @ts-ignore
            authors: this.dataApiAuthors,
            // @ts-ignore
            date: this.dataApiDateTime,
            // @ts-ignore
            picture: this.dataApiImg} = response);
          console.log(response);
        },
        (error) =>  console.log(error),
        () => console.log('complete')
      );
  }
  getIdBilletOfComments(): any{
    const requestComment = this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets/${this.idBillet}/comments`);
    requestComment.subscribe(
      comments => {
            this.comments = comments['hydra:member'];
            this.commentContent = comments['hydra:member'][0].content;
            this.commentDate = comments['hydra:member'][0].date;
            console.log('le nombre d\'instances est de ' + this.comments.length + ' commentaires pour cet articles');
      },
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }
  getCo(): any{
  }
  // GET User from API
  getUsers(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/users/${this.idBillet}`).subscribe(
      response => {
        this.responseUser = {
          // @ts-ignore
          email: response.email,
        };
        console.log(response);
      },
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }
}
