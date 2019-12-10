import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/app.reducer';
import { customFade } from 'src/app/shared/animations';
import * as fromBook from '../../store/books.reducer';

@Component({
  selector: 'app-books-search-results',
  templateUrl: './books-search-results.component.html',
  styleUrls: ['./books-search-results.component.scss'],
  animations: [customFade()]
})
export class BooksSearchResultsComponent implements OnInit {
  booksState$: Observable<fromBook.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.booksState$ = this.store.select(s => s.books);
  }
}
