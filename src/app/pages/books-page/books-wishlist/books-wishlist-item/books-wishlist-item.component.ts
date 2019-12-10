import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/app.reducer';
import * as BooksActions from '../../store/books.actions';
import { BookDetailsResult } from './../../books.model';

@Component({
  selector: 'app-books-wishlist-item',
  templateUrl: './books-wishlist-item.component.html',
  styleUrls: ['./books-wishlist-item.component.scss']
})
export class BooksWishlistItemComponent implements OnInit {
  @Input() book: BookDetailsResult;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onShowDetailsClicked() {
    const id = this.book.id;
    this.store.dispatch(BooksActions.detailsDialogRequest({ id }));
  }
}
