import * as ArticleAction from './article.action';

import { Article } from '../../shared/article.model';

export interface State {
  article: Article;
  articles: Article[];
}

const initialState: State = {
  article: null,
  articles: []
};

export function articleReducer(state = initialState , action: ArticleAction.ArticleAction) {
  switch (action.type) {
    case ArticleAction.GET_ARTICLES:
      return {
        ...state,
        articles : null
      };
    default:
        return state;
  }
}
