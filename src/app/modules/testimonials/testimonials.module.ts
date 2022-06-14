import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';

// Pages
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

// Components
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

// Modals

// Menus
import { ExampleMenuComponent } from './menus/example-menu/example-menu.component';

import {MatCardModule} from '@angular/material/card';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PointComponent } from './components/carousel/point/point.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TestimonialCardComponent,
    TestimonialsPageComponent,
    ExampleMenuComponent,
    CarouselComponent,
    PointComponent,
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class TestimonialsModule { }
