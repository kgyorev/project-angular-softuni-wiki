import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {LoginModel} from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;

  constructor(private authService: AuthService) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }


  login() {
    this.authService
      .login(this.model)
      .subscribe();
  }

}
