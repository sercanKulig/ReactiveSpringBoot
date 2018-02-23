import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {articleReducer} from './store/article.reducers';
import {ArticleEffect} from './store/article.effect';
import {ArticleRoutingModule} from './article-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule,
    SharedModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([ArticleEffect])
  ]
})
export class ArticleModule {
}
