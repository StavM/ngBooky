import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, takeUntil } from 'rxjs/operators';
import * as fromApp from 'src/app/app.reducer';
import { environment } from 'src/environments/environment.prod';

import * as BooksActions from '../../store/books.actions';

const DEBOUNCE_INTERVAL_IN_MSEC = environment.books.search.searchDebounceRateInMsec;
const DEFAULT_SEARCH = environment.books.search.defaultSearch;

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.scss']
})
export class BooksSearchBarComponent implements OnInit, OnDestroy {
  private destroyed = new Subject();

  searchForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.setSearchValue();
    this.bindSearchValue();
  }

  // define a reactive form according to model (atm we only have one prop "searchterm")
  private buildForm(): void {
    this.searchForm = this.formBuilder.group({ searchTerm: [''] });
  }

  // set search box's value with the store's search term.
  private setSearchValue() {
    this.store.select(s => s.books.searchTerm)
      .pipe(take(1))
      .subscribe(searchTerm => this.searchForm.patchValue({ searchTerm }));
  }

  // bind form changes to dispatch search actions to the store.
  private bindSearchValue(): void {
    this.searchForm.valueChanges.pipe(
      takeUntil(this.destroyed),
      debounceTime(DEBOUNCE_INTERVAL_IN_MSEC),
      distinctUntilChanged((oldValue, newValue) => oldValue.searchTerm.toLowerCase().trim() === newValue.searchTerm.toLowerCase().trim())
    ).subscribe(search => this.doSearch(search));
  }

  // dispatches a search action to the store based on the search term.
  doSearch(userSearch: { searchTerm: string } = DEFAULT_SEARCH): void {
    const isSearchExists = !!userSearch && !!(userSearch.searchTerm);
    const isSearchNotEmpty = userSearch.searchTerm.trim().length > 0;
    const selectedSearch = isSearchExists && isSearchNotEmpty ? userSearch : DEFAULT_SEARCH;

    this.store.dispatch(BooksActions.searchRequest(selectedSearch));
  }

  ngOnDestroy() {
    this.destroyed.next();
  }
}
