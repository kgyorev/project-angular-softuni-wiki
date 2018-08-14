import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.css']
})
export class NavigationUserComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/user/login']);
  }

}
