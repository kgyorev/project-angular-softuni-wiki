import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../article/article.service';
import {ArticleModel} from '../article/models/article.model';

@Component({
  selector: 'app-navigation-article',
  templateUrl: './navigation-article.component.html',
  styleUrls: ['./navigation-article.component.css']
})
export class NavigationArticleComponent implements OnInit {
  searchText = '';
  lastArticle: ArticleModel;

  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {
    this.articleService.getHomePage().subscribe(data => {
      this.lastArticle = data.article;
    });
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search() {
    this.router.navigateByUrl(`article/search?searchStr=${this.searchText}`);
  }
}
