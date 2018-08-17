import {Component, OnInit} from '@angular/core';
import {ArticleModel} from '../models/article.model';
import {ArticleService} from '../article.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {
  articles: ArticleModel[];
  page = 1;
  searchText = '';
  totalCount = 0;

  constructor(private articleService: ArticleService, private toastr: ToastrService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;
        this.searchText = params['searchStr'];
        this.articleService.searchArticle(this.page, this.searchText).subscribe(data => {
            this.articles = data.articles;
            this.totalCount = Math.ceil(parseInt(data.totalCount, 10) / 10.0);
          }
        );
      });
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
    let url = `article/search?page=${page}`;
    if (this.searchText) {
      url += `&searchStr=${this.searchText}`;
    }
    return url;

  }

}
