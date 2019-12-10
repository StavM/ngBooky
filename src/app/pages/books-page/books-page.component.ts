import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/app.reducer';
import { customFade } from 'src/app/shared/animations';
import { environment } from 'src/environments/environment';

import * as BooksActions from './store/books.actions';

const DEFAULT_SEARCH = environment.books.search.defaultSearch;

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  animations: [customFade()]
})
export class BooksPageComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(BooksActions.searchRequest(DEFAULT_SEARCH));
  }
}
