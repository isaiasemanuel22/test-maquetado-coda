import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/core-coda/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule),outlet:'child2'},
      { path: '', loadChildren: () => import('./modules/testimonials/testimonials.module').then(m => m.TestimonialsModule),outlet:'child1' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
