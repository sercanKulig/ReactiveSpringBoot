import {Action} from '@ngrx/store';

export const GET_ARTICLES = 'GET_ARTICLES';

export class GetArticles implements Action {
  readonly type = GET_ARTICLES;
}

export type ArticleAction =
  GetArticles;
