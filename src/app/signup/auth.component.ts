import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: any = document.querySelector('#signup');

  constructor(private authService: AuthService, private route: Router) {
  }
  ngOnInit(): void {
  }
  onCreateAccount(page): any{
    event.preventDefault();
    const email: any = document.querySelector('#inputEmail');
    const password: any = document.querySelector('#inputPassword');
    this.authService.sendAuthDataForCreateAccount(email.value, password.value, page );
  }
}
