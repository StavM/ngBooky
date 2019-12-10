import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import { BookDetailsResult } from '../books.model';
import * as BooksActions from '../store/books.actions';
import * as fromBooks from '../store/books.reducer';


@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {
  booksState$: Observable<fromBooks.State>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.booksState$ = this.store.select(s => s.books);
    this.getDetailsById(this.id);
  }

  onAddToWishlistClicked(book: BookDetailsResult): void {
    this.store.dispatch(BooksActions.wishlistAddRequest({ book }));
  }

  onRemoveFromWishlistClicked(book: BookDetailsResult): void {
    this.store.dispatch(BooksActions.wishlistRemoveRequest({ book }));
  }

  isBookInWishlist(book: BookDetailsResult, wishlist: BookDetailsResult[]): boolean {
    return wishlist.findIndex(bk => bk.id === book.id) > -1;
  }

  private getDetailsById(id: string): void {
    this.store.dispatch(BooksActions.detailsRequest({ id }));
  }
}
