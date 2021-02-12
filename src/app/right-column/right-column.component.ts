import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css']
})
export class RightColumnComponent implements OnInit {

  constructor(private authServices: AuthService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }


  ngOnInit(): void {
  }

  onContact(contactForm: NgForm): void {
      console.log(contactForm.value);
  }
  getAdmin(): object{
    return this.authServices.getAdmin()
      .subscribe(response => console.log(response));
  }
}
