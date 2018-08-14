import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ToastrService} from 'ngx-toastr';
import {ArticleModel} from '../models/article.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
  styleUrls: ['./all-article.component.css']
})
export class AllArticleComponent implements OnInit {
  articles: ArticleModel[];

  constructor(private articleService: ArticleService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.articleService.getAllArticle().subscribe(data => {
      console.dir(data);
      this.articles = data.articles;
    });
  }

}
