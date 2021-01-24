import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Junior, mais pas Manchot';


  constructor() {

  }
  ngOnInit(): void {
  }
}
