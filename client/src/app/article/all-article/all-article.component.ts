import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ToastrService} from 'ngx-toastr';
import {ArticleModel} from '../models/article.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
  styleUrls: ['./all-article.component.css']
})
export class AllArticleComponent implements OnInit {
  articles: ArticleModel[];
  page = 1;
  totalCount = 0;

  constructor(private articleService: ArticleService, private toastr: ToastrService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;
        this.articleService.getAllArticle(this.page).subscribe(data => {
            this.articles = data.articles;
            this.totalCount = Math.ceil(parseInt(data.totalCount, 10) / 10.0);
          }
        );
      });


    // const url = this.getUrl(this.page);
    // this.articleService.getAllArticle(url).subscribe(data => {
    //   console.dir(data);
    //   this.articles = data.articles;
    // });
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }
    const url = this.getUrl(this.page - 1);
    this.articles = undefined;
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.articles.length === 0 || this.articles.length < 10) {
      return;
    }
    const url = this.getUrl(this.page + 1);
    this.articles = undefined;
    this.router.navigateByUrl(url);
  }

  private getUrl(page) {
    return `article/all?page=${page}`;
  }

}
