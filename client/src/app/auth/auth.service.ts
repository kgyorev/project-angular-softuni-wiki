import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterModel} from './models/register.model';
import {LoginModel} from './models/login.model';

// const host = 'https://softuni-wiki-server.herokuapp.com:443/';
const host = 'http://localhost:1337/';

const loginUrl = host + 'user/login';
const registerUrl = host + 'user/register';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(body: RegisterModel) {
    return this.http.post(registerUrl, body);
  }

  login(body: LoginModel) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  isAdmin(): boolean {
    if (this.user) {
      return this.user.isAdmin;
    }
    return false;
  }

  get user() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}
