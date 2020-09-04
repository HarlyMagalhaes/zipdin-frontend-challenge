import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { BooksService } from 'src/app/core/services/books.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  search: string = 'angular';
  books: Book[] = [];

  constructor(
    public bookService: BooksService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks(this.search)
      .subscribe((data: any) => {
        console.log(data);
        this.books = data;
      });
  }

  onSearch(value: string) {
    this.search = value;
  }
}
