import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class Globalservices {

  constructor(private httpClient: HttpClient) {
  }
  data: object[];
  dataId: any;
  datapi: any[];
  comments: any;
  singleComment: any;
  id: any;
  onGetData(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets`).subscribe((response) => {
      this.data = [response];
      this.datapi = this.data[0]['hydra:member'];
    },
      (error) => { console.log('Erreur de chargement serveur ...' + error); },
      () => { console.log('Complete'); }
    );
  }

  getComments(id: number): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/comments/`).subscribe(
      comments => {
        this.comments = comments['hydra:member'][id];
        this.singleComment = comments['hydra:member'];
        console.log('log GlobalServoces', this.comments, id);
      },
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }
}


