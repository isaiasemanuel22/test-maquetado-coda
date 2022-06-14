import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

const routes: Routes = [
  { path: '', component: TestimonialsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
