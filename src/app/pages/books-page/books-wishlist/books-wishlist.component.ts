import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import { customFade } from 'src/app/shared/animations';
import { BookDetailsResult } from '../books.model';

@Component({
  selector: 'app-books-wishlist',
  templateUrl: './books-wishlist.component.html',
  styleUrls: ['./books-wishlist.component.scss'],
  animations: [customFade()]
})
export class BooksWishlistComponent implements OnInit {
  myWishlist$: Observable<BookDetailsResult[]>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.myWishlist$ = this.store.select(s => s.books.wishlist);
  }
}
