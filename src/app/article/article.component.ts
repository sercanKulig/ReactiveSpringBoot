import {Component, OnInit} from '@angular/core';
import * as ArticleActions from './store/article.action';
import {Store} from '@ngrx/store';
import * as fromArticle from './store/article.reducers';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private store: Store<fromArticle.FeatureState>) {
  }

  ngOnInit() {
    this.store.dispatch(new ArticleActions.GetArticles());
  }

}
