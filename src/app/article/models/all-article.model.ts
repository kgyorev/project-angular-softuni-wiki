import {ArticleModel} from './article.model';

export class AllArticleModel {
  constructor(
    public success: string,
    public totalCount: string,
    public articles: ArticleModel[]) {
  }
}
