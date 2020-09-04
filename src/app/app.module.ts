import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BooksService } from 'src/app/core/services/books.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';

import { MaterialModule } from './material.module';
import { BookCardComponent } from './shared/components/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookCardComponent
  ],
  imports: [
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
