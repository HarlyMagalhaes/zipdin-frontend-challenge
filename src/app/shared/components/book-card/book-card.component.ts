import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  favorite(id: string, isAdd: boolean) {
    let favoriteIds: string[] = JSON.parse(localStorage.getItem('@favoriteIds')) || [];
    let favoriteBooks: Book[] = JSON.parse(localStorage.getItem('@favoriteBooks')) || [];

    this.book.isFavorite = !this.book.isFavorite;

    if (isAdd) {
      favoriteIds.push(id);
      favoriteBooks.push(this.book);
    }

    else {
      let bookIdIndexInArray: number = favoriteIds.indexOf(id);
      let bookIndexInArray: number = favoriteBooks.indexOf(this.book);

      favoriteIds.splice(bookIdIndexInArray, 1);
      favoriteBooks.splice(bookIndexInArray, 1);
    }

    localStorage.setItem('@favoriteIds', JSON.stringify(favoriteIds));
    localStorage.setItem('@favoriteBooks', JSON.stringify(favoriteBooks));

    this.openSnackbar(isAdd);
  }

  openSnackbar(isAdd: boolean) {
    this._snackBar.open(`Livro ${isAdd ? 'adicionado' : 'removido'} dos favoritos!`, 'Fechar', {
      duration: 3000,
    })
  }
}
