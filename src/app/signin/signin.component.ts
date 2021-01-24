import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
onConnectMember(): any{
    event.preventDefault();
    const email: any = document.querySelector('#email');
    const password: any = document.querySelector('#password');
    this.authService.signInAccountMember(email.value, password.value);
    this.authService.onStateConnection('page1');
    this.authService.authStatus = false;
  }
}
