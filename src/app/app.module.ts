import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BooksService } from 'src/app/core/services/books.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { NoResultsComponent } from './shared/components/no-results/no-results.component';
import { BooksListComponent } from './shared/components/books-list/books-list.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookCardComponent,
    NoResultsComponent,
    BooksListComponent,
    BookDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
