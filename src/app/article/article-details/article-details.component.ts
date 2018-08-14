import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';
import {ArticleModel} from '../models/article.model';
import {Observable} from 'rxjs';
import {RegisterModel} from '../../auth/models/register.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article: ArticleModel;
  id: string; // id to ot URL-a se vizma s bibliotekata ActivatedRoute
  constructor(private route: ActivatedRoute, private articleService: ArticleService, public authService: AuthService) {
    this.article = new ArticleModel('', '', '');
    this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
  }

  ngOnInit() {
    this.articleService.getArticleDetails(this.id).subscribe(data => {
      // this.article.content = data.lastEdit.content;
      console.dir(data);
      this.article.title = data.article.title;
      this.article._id = data.article._id;
      this.article.content = data.article.lastEdit.content;
    });
  }

}
