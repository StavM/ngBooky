import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/app.reducer';

import { BookSearchResult } from '../../../books.model';
import * as BooksActions from '../../../store/books.actions';

@Component({
  selector: 'app-books-search-result-item',
  templateUrl: './books-search-result-item.component.html',
  styleUrls: ['./books-search-result-item.component.scss']
})
export class BooksSearchResultItemComponent implements OnInit {
  @Input() book: BookSearchResult;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {  }

  onShowDetailsClicked(): void {
    const id = this.book.id;
    this.store.dispatch(BooksActions.detailsDialogRequest({ id }));
  }
}
