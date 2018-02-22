import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArticleModule {}
