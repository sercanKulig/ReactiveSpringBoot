import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

const articleRoutes: Routes = [
  {
    path: '', component: ArticleComponent, children: [
      {path: '', component: ArticleDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class ArticleRoutingModule {
}
