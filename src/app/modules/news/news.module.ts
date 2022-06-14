import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

// Pages
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

// Components
import { ArticleCardComponent } from './components/article-card/article-card.component';

// Modals
import { ExampleModalComponent } from './modal/example-modal/example-modal.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';
import { SearchComponent } from './components/search/search.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

// Menus


@NgModule({
  declarations: [
    NewsPageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    ExampleModalComponent,
    NewsletterModalComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatCardModule
    
  ]
})
export class NewsModule { }
