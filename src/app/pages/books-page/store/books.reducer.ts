import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from 'src/app/pages/login-page/store/login.actions';

import { BookDetailsResult, BookSearchResults } from '../books.model';
import * as BooksActions from './books.actions';

export interface State {
  searchTerm: string;
  isSearching: boolean;
  resultsPage: number;
  results: BookSearchResults;
  error: HttpErrorResponse;
  currentBook: BookDetailsResult;
  wishlist: BookDetailsResult[];
}

const initialState: State = {
  searchTerm: '',
  isSearching: false,
  resultsPage: 0,
  results: {
    totalItems: 0,
    items: null
  },
  error: null,
  currentBook: null,
  wishlist: []
};

export function booksReducer(booksState: State | undefined, booksAction: Action) {
  return createReducer(
    initialState,

    on(BooksActions.searchRequest, BooksActions.searchRequestPaged, (state, action) => ({
      ...state,
      searchTerm: action.searchTerm,
      resultsPage: action.startIndex ? action.startIndex : 0,
      results: { ...state.results, totalItems: 0, items: null },
      isSearching: true
    })),

    on(BooksActions.searchSuccess, (state, action) => ({
      ...state,
      results: action.searchResults,
      isSearching: false
    })),

    on(BooksActions.searchFailure,
      BooksActions.detailsFailure, (state, action) => ({
        ...initialState,
        error: action.error
      })),

    on(BooksActions.detailsRequest, (state) => ({
      ...state,
      currentBook: null
    })),

    on(BooksActions.detailsSuccess, (state, action) => ({
      ...state,
      currentBook: action.volDetails
    })),

    on(BooksActions.wishlistItemAdded, (state, action) => {
      const bookAlreadyExists = state.wishlist.findIndex(f => action.book.id === f.id) > -1;
      const wishlistWithBook = [...state.wishlist, action.book];
      return ({
        ...state,
        wishlist: bookAlreadyExists ? [...state.wishlist] : wishlistWithBook
      });
    }),

    on(BooksActions.wishlistItemRemoved, (state, action) => {
      const wishlistWithoutBook = state.wishlist.filter(book => book.id !== action.book.id);
      return ({
        ...state,
        wishlist: wishlistWithoutBook
      });
    }),

    on(LoginActions.logout, () => ({
      ...initialState,
    })),

  )(booksState, booksAction);
}
