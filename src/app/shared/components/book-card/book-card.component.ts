import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

  favorite(id: string) {
    let favorites = JSON.parse(localStorage.getItem('@favorites')) || [];
    favorites.push(id);
    localStorage.setItem('@favorites', JSON.stringify(favorites));

    this.book.isFavorite = !this.book.isFavorite;
  }
}
