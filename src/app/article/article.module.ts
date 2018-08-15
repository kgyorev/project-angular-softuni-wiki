import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {articleComponents} from './index';
import {RouterModule} from '@angular/router';
import {ArticleService} from './article.service';
import {BrowserModule} from '@angular/platform-browser';
import {ArticleRoutingModule} from './article-routing.module';
import {CommonModule} from '@angular/common';
import { NavigationArticleComponent } from '../navigation-article/navigation-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { HistoryArticleComponent } from './history-article/history-article.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';



@NgModule({
  declarations: [...articleComponents, ArticleDetailsComponent, EditArticleComponent, HistoryArticleComponent, EditDetailsComponent],
  imports: [
    CommonModule, // Triabva da go ima vav vseki podmodul
   // BrowserModule, // tuk se menajirat pipe -vete  , tozi triabva da go ima v glavnia modul
    FormsModule,
    ArticleRoutingModule
  ],
  providers: [ArticleService]
  // exports: [
  //   CommonModule // tozi modul sadarja async pipovete i BrowserModule
  //   // BrowserModule
  // ]
})
export class ArticleModule {
}
