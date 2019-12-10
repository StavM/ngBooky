import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import * as LoginActions from 'src/app/pages/login-page/store/login.actions';

import * as BooksActions from '../../../../pages/books-page/store/books.actions';
import { slideToBottom } from '../../../../shared/animations';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  animations: [slideToBottom()]
})
export class MainHeaderComponent implements OnInit {
  appState$: Observable<fromApp.AppState>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.appState$ = this.store;
  }

  onNavigateToWishlistClicked(): void {
    this.store.dispatch(BooksActions.wishlistNavigation());
  }

  onNavigateToSearchClicked(): void {
    this.store.dispatch(BooksActions.searchlistNavigation());
  }

  onLogoutClicked() {
    this.store.dispatch(LoginActions.logout());
  }
}
