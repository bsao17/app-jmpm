import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDisabled = false;
  authStatus = this.authService.authStatus;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onDisconnect(): void{
    this.authService.signOutAccountMember();
    document.location.href = '';
  }
  test(): any{
    console.log(this.router.url);
  }
}
