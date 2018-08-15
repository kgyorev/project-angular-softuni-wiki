import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article/article.service';
import {ArticleModel} from '../article/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  articles: ArticleModel[];
  lastArticle: ArticleModel;

  ngOnInit() {
    this.articleService.getHomePage().subscribe(data => {
      console.dir(data);
      this.lastArticle = data.article;
      this.articles = data.articles;
      this.lastArticle.content = data.displayContent;
    });
  }

}
