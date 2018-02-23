import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import * as ArticleAction from './article.action';
import {ArticleDTO} from '../../shared/articleDTO.model';
import {HeaderService} from '../../shared/header.service';

@Injectable()
export class ArticleEffect {
  public static url = 'http://localhost:9091/api/';

  @Effect()
  getArticles = this.actions$
    .ofType(ArticleAction.GET_ARTICLES)
    .switchMap(() => {
      return this.httpClient.get<ArticleDTO>(ArticleEffect.url + 'articles', {
        headers: this.headerService.getHeaders(),
        responseType: 'json'
      });
    })
    .mergeMap((articlesDTO: ArticleDTO) => {
      if (articlesDTO.responseMessageStatus === 'SUCCESS') {
        return [
          {
            type: ArticleAction.SET_ARTICLES,
            payload: articlesDTO.articles
          }
        ];
      } else {
        //todo error message popup with user.operationMessage
      }
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private headerService: HeaderService) {
  }
}
