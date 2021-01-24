import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Globalservices {

  constructor(private httpClient: HttpClient) {}
  data: object[];
  dataId: any;
  datapi: any;
  onGetData(): any{
    this.httpClient.get(`https://jmpmapi.herokuapp.com/api/billets`).subscribe((response) => {
      this.data = [response];
      this.datapi = this.data[0]['hydra:member'];
      console.log(this.datapi);
    },
      (error) => { console.log('Erreur de chargement serveur ...' + error); },
      () => { console.log('Complete'); }
    );
  }
}


