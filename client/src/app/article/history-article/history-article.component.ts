import {Component, OnInit} from '@angular/core';
import {ArticleModel} from '../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';
import {AuthService} from '../../auth/auth.service';
import {ArticleHistoryModel} from '../models/article-history.model';

@Component({
  selector: 'app-history-article',
  templateUrl: './history-article.component.html',
  styleUrls: ['./history-article.component.css']
})
export class HistoryArticleComponent implements OnInit {

  articleHistoryLs: ArticleHistoryModel[];
  article: ArticleModel;
  id: string; // id to ot URL-a se vizma s bibliotekata ActivatedRoute
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
  }

  ngOnInit() {
    this.articleService.historyArticleById(this.id).subscribe(data => {
      this.article = data.article;
      this.articleHistoryLs = data.editLs;
    });
  }

  calcDate(dateIsoFormat) {
    const date = new Date(dateIsoFormat);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    let hh = '' + date.getHours();
    if (hh.length === 1) {
      hh = '0' + hh;
    }
    let mm = '' + date.getMinutes();
    if (mm.length === 1) {
      mm = '0' + mm;
    }
    let ss = '' + date.getSeconds();
    if (ss.length === 1) {
      ss = '0' + ss;
    }
    let dtStr = '' + dt;
    if (dt < 10) {
      dtStr = '0' + dt;
    }
    let monthStr = '' + month;
    if (month < 10) {
      monthStr = '0' + month;
    }

    return dt + '-' + month + '-' + year + ' At ' + hh + ':' + mm + ':' + ss;
  }

}
