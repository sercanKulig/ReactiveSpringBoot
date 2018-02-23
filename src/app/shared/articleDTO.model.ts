export class ArticleDTO {
  constructor(public message: string, public responseMessageStatus: string, public articles: Article) {
  }
}

export class Article {
  constructor(public id: number, public title: string, public catagory: string, public dateCreation: Date) {}
}
