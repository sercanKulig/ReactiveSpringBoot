export class ArticleDTO {
  constructor(public message: string, public responseMessageStatus: string, public articles: Article) {
  }
}

export class Article {
  constructor(public articleId: number, public title: string, public category: string, public dateCreation: Date) {}
}
