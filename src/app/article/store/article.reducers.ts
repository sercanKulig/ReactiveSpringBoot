import * as ArticleAction from './article.action';

import { Article } from '../../shared/articleDTO.model';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  articles: State;
}

export interface State {
  articles: Article[];
}

const initialState: State = {
  articles: []
};

export function articleReducer(state = initialState , action: ArticleAction.ArticleAction) {
  switch (action.type) {
    case ArticleAction.GET_ARTICLES:
      return {
        ...state,
      };
    case ArticleAction.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    default:
        return state;
  }
}
