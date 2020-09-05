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
    let favoritesIds = JSON.parse(localStorage.getItem('@favoriteIds')) || [];
    let favoriteBooks = JSON.parse(localStorage.getItem('@favoriteBooks')) || [];

    favoritesIds.push(id);
    favoriteBooks.push(this.book);

    localStorage.setItem('@favoriteIds', JSON.stringify(favoritesIds));
    this.book.isFavorite = !this.book.isFavorite;
    localStorage.setItem('@favoriteBooks', JSON.stringify(favoriteBooks));
  }
}
