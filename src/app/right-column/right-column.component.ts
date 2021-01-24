import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {log} from 'util';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css']
})
export class RightColumnComponent implements OnInit {
  admin: any;
  constructor(private authServices: AuthService) { }

  ngOnInit(): void {
  }
  getAdmin(): any{
    this.authServices.getAdmin()
      .subscribe(response => console.log(response));
  }
}
