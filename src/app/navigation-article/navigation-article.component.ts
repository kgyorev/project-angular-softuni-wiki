import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-article',
  templateUrl: './navigation-article.component.html',
  styleUrls: ['./navigation-article.component.css']
})
export class NavigationArticleComponent implements OnInit {
  searchText = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigateByUrl(`article/search?searchStr=${this.searchText}`);
  }
}
