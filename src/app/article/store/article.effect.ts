import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import * as ArticleAction from './article.action';
import {Article} from '../../shared/article.model';

@Injectable()
export class ArticleEffect {
  constructor(private actions$: Actions,
              private httpClients: HttpClient) {
  }

  @Effect()
  getArticles = this.actions$
    .ofType(ArticleAction.GET_ARTICLES)
    .switchMap((action: ArticleAction.GetArticles) => {
      return this.httpClients.get('http://localhost:9091/api/articles', {
        responseType: 'json'
      });
    })
    .mergeMap((articles: Article[]) => {
      return [
        {
          type: ArticleAction.GET_ARTICLES,
        }
      ];
    });
}
