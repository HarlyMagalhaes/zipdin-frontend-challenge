import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() hasBooks: boolean;
  @Input() booksList: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
