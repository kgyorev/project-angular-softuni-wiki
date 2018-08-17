import { Component, OnInit } from '@angular/core';
import {CreateArticleModel} from '../models/create-article.model';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  bindingModel: CreateArticleModel;
  constructor(private articleService: ArticleService) {
    this.bindingModel = new CreateArticleModel('', '');
  }

  ngOnInit() {
  }

  create() {
    this.articleService.createArticle(this.bindingModel).subscribe();
  }

}
