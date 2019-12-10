import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromBooks from './pages/books-page/store/books.reducer';
import * as fromLogin from './pages/login-page/store/login.reducer';

export interface AppState {
  login: fromLogin.State;
  books: fromBooks.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  login: fromLogin.loginReducer,
  books: fromBooks.booksReducer
};

// meta reducer, used to sync store to storage @ ngrx-store-localstorage.
// (https://github.com/btroncone/ngrx-store-localstorage)
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['login', 'books'], rehydrate: true, storage: sessionStorage })(reducer);
}
