import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article.component';
import {AuthGuard} from '../auth/auth-guard.service';

const articleRoutes: Routes = [
  {path: '', component: ArticleComponent, canActivate: [AuthGuard]}
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
export class  ArticleRoutingModule {}
