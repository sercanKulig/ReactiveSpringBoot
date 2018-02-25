import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as fromArticle from "../store/article.reducers";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleState: Observable<fromArticle.State>;
  constructor(private store: Store<fromArticle.FeatureState>) {}

  ngOnInit() {
    this.articleState = this.store.select('articles');
  }

}
