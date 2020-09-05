import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { BooksService } from 'src/app/core/services/books.service';

import { Book } from 'src/app/core/models/book.model';
import { BooksParams } from 'src/app/core/models/books-api-params.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  search: string = '';
  books: Book[] = [];
  loading: boolean = false;
  hasBooks: boolean = false;

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
      if (key == "Enter") this.getBooks()
    });
  }

  async getBooks() {
    let params: BooksParams = {
      q: this.search,
      startIndex: String(this.pageEvent.pageIndex * this.pageEvent.pageSize),
      maxResults: String(this.pageEvent.pageSize),
    };

    this.loading = true;
    try {
      this.bookService.getBooks(params)
        .subscribe((data: any) => {
          this.books = data;
          this.pageEvent.length = this.books[0].totalItems;
          this.loading = false;
          this.hasBooks = this.books.length > 0;
        });
    }

    catch (error) {
      console.error(error);
      this.loading = false;
      this.hasBooks = false;
    }
  }

  onPageEvent(event: PageEvent) {
    this.pageEvent = event;
    this.getBooks();
  }


  ngOnDestroy(): void {
    document.removeEventListener('keydown', ({ key }) => {
      if (key == "Enter") this.getBooks()
    });
  }
}
