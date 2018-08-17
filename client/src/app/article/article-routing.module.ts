import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AllArticleComponent} from './all-article/all-article.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {AuthGuard} from '../auth/guards/auth.guard';
import {ArticleDetailsComponent} from './article-details/article-details.component';
import {EditArticleComponent} from './edit-article/edit-article.component';
import {HistoryArticleComponent} from './history-article/history-article.component';
import {EditDetailsComponent} from './edit-details/edit-details.component';
import {SearchArticleComponent} from './search-article/search-article.component';


const articleRoutes: Routes = [
  {path: 'all', component: AllArticleComponent},
  {path: 'search', component: SearchArticleComponent},
  {path: 'details/:id', component: ArticleDetailsComponent},
  {path: 'details/edit/:id', component: EditDetailsComponent, canActivate: [AuthGuard]},
  // {path: 'my', component: MyFurnitureComponent},
  {path: 'create', component: CreateArticleComponent, canActivate: [AuthGuard]},
  {path: 'history/:id', component: HistoryArticleComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditArticleComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [RouterModule]
})

export class ArticleRoutingModule {

}
