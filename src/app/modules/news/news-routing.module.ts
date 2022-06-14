import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes: Routes = [
  { path: '', component: NewsPageComponent },
  { path: 'article', component: ArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
