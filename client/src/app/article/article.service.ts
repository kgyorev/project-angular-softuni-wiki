import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleModel} from './models/article.model';
import {CreateArticleModel} from './models/create-article.model';
import {AllArticleModel} from './models/all-article.model';

// const host = 'https://softuni-wiki-server.herokuapp.com:443/';
const host = 'http://localhost:1337/';


const createUrl = host + 'article/create';
const allUrl = host + 'article/all';
const searchUrl = host + 'article/search';
const lockUrl = host + 'article/lock/';
const unlockUrl = host + 'article/unlock/';
const detailsUrl = host + 'article/details/';
const deleteUrl = host + 'article/delete/';
// const articleById = 'http://localhost:5000/article/';
const articleByIdEdit = host + 'article/edit/';
const articleEditDetailsById = host + 'edit/';
const articleHistoryByIdEdit = host + 'article/history/';


@Injectable(
//   {
//   providedIn: 'root'   // tova se slaga parvanochalno , seld tova moje da se sloji za koi modul e
// }
)
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getHomePage() {
    return this.http.get<any>(host);
  }

  createArticle(body: CreateArticleModel) {
    return this.http.post(createUrl, body);
  }

  getAllArticle(page = 1) {
    return this.http.get<AllArticleModel>(allUrl + `?page=${page}`);
  }
  searchArticle(page = 1, searchText = '') {
    return this.http.get<AllArticleModel>(searchUrl + `?page=${page}&searchStr=${searchText}`);
  }

  getArticleDetails(id: string) {
    return this.http.get<any>(detailsUrl + id);
  }

  getArticleLock(id: string) {
    return this.http.get<any>(lockUrl + id);
  }

  getArticleUnLock(id: string) {
    return this.http.get<any>(unlockUrl + id);
  }

  deleteArticle(id: string) {
    return this.http.get(deleteUrl + id);
  }

  // getArticleById(id: string) {
  //   return this.http.get<ArticleModel>(furnitureById + id);
  // }

  editArticleById(id: string, body: ArticleModel) {
    return this.http.post<ArticleModel>(articleByIdEdit + id, body);
  }

  historyArticleById(id: string) {
    return this.http.get<any>(articleHistoryByIdEdit + id);
  }

  articleEditDetailsById(id: string) {
    return this.http.get<any>(articleEditDetailsById + id);
  }


}
