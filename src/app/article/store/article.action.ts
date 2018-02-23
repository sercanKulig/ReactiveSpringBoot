import {Action} from '@ngrx/store';
import {ArticleDTO} from '../../shared/articleDTO.model';

export const GET_ARTICLES = 'GET_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';

export class GetArticles implements Action {
  readonly type = GET_ARTICLES;
}

export class SetArticles implements Action {
  readonly type = SET_ARTICLES;

  constructor(public payload: ArticleDTO) {
  }
}

export type ArticleAction = GetArticles |
  SetArticles;
