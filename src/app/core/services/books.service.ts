import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

import { Book } from '../models/book.model';
import { BooksParams } from '../models/books-api-params.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  urlBase: string;

  constructor(public http: HttpClient) {
    this.urlBase = environment.urlBase;
  }

  getBooks(params: BooksParams) {
    return this.http.get<Book[]>(`${this.urlBase}/volumes`, {
      params: { ...params }
    })
      .pipe(
        map((data: any) => {
          let totalItems: number = data.totalItems;

          const books: Book[] = data.items.map((item) => {
            let { id, volumeInfo, accessInfo, saleInfo } = item;
            let favorites = localStorage.getItem('@favorites') || [];

            const book: Book = {
              id: id,
              title: volumeInfo.title,
              authors: volumeInfo.authors,
              categories: volumeInfo.categories,
              description: volumeInfo.description,
              thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : '',
              smallThumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : '',
              isFavorite: favorites.includes(id),
              printType: volumeInfo.printType,
              publishedDate: volumeInfo.publishedDate,
              publisher: volumeInfo.publisher,
              saleInfo: saleInfo,
              accessInfo: accessInfo,
              totalItems: totalItems,
            }

            return book;
          });

          return books;
        })
      );
  }
}
