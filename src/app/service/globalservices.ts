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
  id: any;
  onGetDataBillet(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets`).subscribe((response) => {
      this.data = [response];
      this.datapi = this.data[0]['hydra:member'];
    },
      (error) => { console.log('Erreur de chargement serveur ...' + error); },
      () => { console.log('Complete'); }
    );
  }
  onGetComments(id): any{
    const comments = this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets/${id}/comments?page=3`);
    comments.subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}


