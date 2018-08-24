import {Component, OnInit} from '@angular/core';
import {ArticleHistoryModel} from '../models/article-history.model';
import {ArticleModel} from '../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  articleHistory: ArticleHistoryModel;
  article: ArticleModel;
  id: string; // id to ot URL-a se vizma s bibliotekata ActivatedRoute
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
  }

  ngOnInit() {
    this.articleService.articleEditDetailsById(this.id).subscribe(data => {
      this.articleHistory = data.edit;
      this.article = data.article;
    });
  }
}
