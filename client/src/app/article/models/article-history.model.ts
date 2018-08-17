export class ArticleHistoryModel {
  constructor(
    public _id: string,
    public title: string,
    public creationDate: string,
    public author: { email: string },
    public content: string) {
  }
}
