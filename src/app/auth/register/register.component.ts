import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../models/register.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(private authService: AuthService) {
    this.model = new RegisterModel('', '', '');
  }

  ngOnInit() {
  }

  register() {
    this.authService
      .register(this.model)
      .subscribe();
  }

}
