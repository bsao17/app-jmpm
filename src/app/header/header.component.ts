import { Component, OnInit } from '@angular/core';
import {angularClassDecoratorKeys} from 'codelyzer/util/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pictLogo: any = document.getElementById('pictLogo');
  classActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  logoMove(page): any{
    this.classActive = true;
    setTimeout((): any => {
      document.location = page; },
      1500);
  }
}
