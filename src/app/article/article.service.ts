import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleModel} from './models/article.model';
import {CreateArticleModel} from './models/create-article.model';
import {AllArticleModel} from './models/all-article.model';


// const host = 'https://softuni-wiki-server.herokuapp.com:443/';
const host = 'http://localhost:1337/';


const createUrl = host + 'article/create';
const allUrl = host + 'article/all';
const detailsUrl = host + 'article/details/';
const deleteUrl = host + 'article/delete/';
// const articleById = 'http://localhost:5000/article/';
const articleByIdEdit = host + 'article/edit/';


@Injectable(
//   {
//   providedIn: 'root'   // tova se slaga parvanochalno , seld tova moje da se sloji za koi modul e
// }
)
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  createArticle(body: CreateArticleModel) {
    return this.http.post(createUrl, body);
  }

  getAllArticle() {
    const val = this.http.get<AllArticleModel>(allUrl);
    console.dir(val);
    return val;
  }

  getArticleDetails(id: string) {
    return this.http.get<any>(detailsUrl + id);
  }

  deleteArticle(id: string) {
    return this.http.delete(deleteUrl + id);
  }

  // getArticleById(id: string) {
  //   return this.http.get<ArticleModel>(furnitureById + id);
  // }

  editArticleById(id: string, body: ArticleModel) {
    return this.http.post<ArticleModel>(articleByIdEdit + id, body);
  }
}
