import { Component, OnInit } from '@angular/core';
import {Globalservices} from '../service/globalservices';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  date: any = new Date().toLocaleDateString('fr-FR');
  onData: any[] = this.globalServices.onGetData();
  constructor(public globalServices: Globalservices) { }

  ngOnInit(): void {
  }
}
