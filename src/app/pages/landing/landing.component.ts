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
  search: string = 'angular';
  books: Book[] = [];
  loading: boolean = false;

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
    this.getBooks();
  }

  getBooks() {
    let params: BooksParams = {
      q: this.search,
      startIndex: String(this.pageEvent.pageIndex * this.pageEvent.pageSize),
      maxResults: String(this.pageEvent.pageSize),
    }

    this.loading = true;
    this.bookService.getBooks(params)
      .subscribe((data: any) => {
        this.books = data;
        this.pageEvent.length = this.books[0].totalItems;
        this.loading = false;
      });
  }

  onPageEvent(event: PageEvent) {
    this.pageEvent = event;
    this.getBooks();
  }

  onSearch(value: string) {
    this.search = value;
  }

}
