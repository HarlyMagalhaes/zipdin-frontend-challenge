import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { BooksService } from 'src/app/core/services/books.service';

import { Book } from 'src/app/core/models/book.model';
import { BooksParams } from 'src/app/core/models/books-api-params.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  search: string = '';
  books: Book[] = [];
  favoriteBooks: Book[] = [];
  loading: boolean = false;
  hasBooks: boolean = false;

  tabSelected: number = 0;

  pageSizeOptions: number[] = [5, 10, 20, 40];

  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
  };

  constructor(
    public bookService: BooksService
  ) { }

  ngOnInit(): void {
    document.addEventListener('keydown', ({ key }) => {
      if (key == "Enter") this.getReference();
    });
  }

  getReference() {
    if (this.tabSelected == 0) {
      this.getBooks();
    }

    else if (this.tabSelected == 1) {
      this.getFavoriteBooks();
    }

  }

  getBooks() {
    let params: BooksParams = {
      q: this.search,
      startIndex: String(this.pageEvent.pageIndex * this.pageEvent.pageSize),
      maxResults: String(this.pageEvent.pageSize),
    };

    this.loading = true;

    this.bookService.getBooks(params)
      .subscribe(
        (data: any) => {
          this.books = data;
          this.pageEvent.length = data.length > 0 ? data[0].totalItems : 0;
          console.log(this.books);
        },
        (error) => {
          console.error(error);
          this.loading = false;
          this.hasBooks = false;
        },
        () => {
          this.loading = false;
          this.hasBooks = this.books.length > 0;
        }
      );
  }

  getFavoriteBooks() {
    this.loading = true;

    try {
      let favoriteBooks: Book[] = JSON.parse(localStorage.getItem('@favoriteBooks'));
      let index: number = this.pageEvent.pageIndex * this.pageEvent.pageSize;

      favoriteBooks = favoriteBooks
        .filter((value: Book) => value.title.toLowerCase().includes(this.search.toLowerCase()))
        .slice(index, index + this.pageEvent.pageSize);

      this.pageEvent.length = favoriteBooks.length;
      this.favoriteBooks = favoriteBooks;

      this.hasBooks = this.favoriteBooks.length > 0;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  onPageEvent(event: PageEvent) {
    this.pageEvent = event;
    this.getReference();
  }

  onTabChanged(event: MatTabChangeEvent) {
    this.tabSelected = event.index;

    this.pageEvent = {
      pageIndex: 0,
      pageSize: 10,
      length: 0,
    };

    this.books.length = 0;
    this.favoriteBooks.length = 0;

    this.getReference();
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', ({ key }) => {
      if (key == "Enter") this.getReference()
    });
  }
}
