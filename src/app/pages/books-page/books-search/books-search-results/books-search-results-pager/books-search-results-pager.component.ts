import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import { environment } from 'src/environments/environment';
import * as BooksActions from '../../../store/books.actions';
import * as fromBooks from '../../../store/books.reducer';


const DEFAULT_PAGE_SIZE = environment.books.search.maxResults;

@Component({
  selector: 'app-books-search-results-pager',
  templateUrl: './books-search-results-pager.component.html',
  styleUrls: ['./books-search-results-pager.component.scss']
})
export class BooksSearchResultsPagerComponent implements OnInit {
  booksState$: Observable<fromBooks.State>;
  pageSize: number = DEFAULT_PAGE_SIZE;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.booksState$ = this.store.select(s => s.books);
  }

  onPageChanged(searchTerm: string, page: PageEvent): void {
    const startIndex = page.pageIndex;
    this.store.dispatch(BooksActions.searchRequest({ searchTerm, startIndex }));
  }
}
