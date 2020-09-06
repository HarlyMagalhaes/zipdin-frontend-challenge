import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book_id: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.book_id = this._route.snapshot.paramMap.get('id');
  }

}
