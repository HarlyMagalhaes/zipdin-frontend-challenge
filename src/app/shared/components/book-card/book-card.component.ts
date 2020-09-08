import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  animations: [
    trigger('openDetails', [
      transition(':enter', [
        style({
          transformOrigin: 'top center',
          transform: 'scaleY(0)',
          opacity: 1,
        }),
        animate('200ms', style({
          transform: 'scaleY(1)',
        }))
      ]),
      transition(':leave', [
        style({
          transformOrigin: 'top center',
        }),
        animate('200ms', style({
          transform: 'scaleY(0)',
        }))
      ])
    ]),
  ],
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  detailsOpen: boolean = false;

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

  setDetails() {
    this.detailsOpen = !this.detailsOpen;
  }

  openSnackbar(isAdd: boolean) {
    this._snackBar.open(`Livro ${isAdd ? 'adicionado' : 'removido'} dos favoritos!`, 'Fechar', {
      duration: 3000,
    })
  }
}
