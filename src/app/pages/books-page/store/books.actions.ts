/*
 * All the store actions used by Booky feature module.
*/
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { BookDetailsResult, BookSearchResults } from '../books.model';

// tslint:disable-next-line:max-line-length
export const searchRequestPaged = createAction('[Books Results Pager] Search Request', props<{ searchTerm: string, startIndex?: number }>());
export const searchRequest = createAction('[Books Search Bar] Search Request', props<{ searchTerm: string, startIndex?: number }>());
export const searchSuccess = createAction('[Books Effects] Search Success', props<{ searchResults: BookSearchResults }>());
export const searchFailure = createAction('[Books Effects] Search Failure', props<{ error: HttpErrorResponse }>());

export const detailsDialogRequest = createAction('[Books Result Item] Details Dialog Request', props<{ id: string }>());
export const detailsDialogClosed = createAction('[Books Effects] Details Dialog Closed');

export const detailsRequest = createAction('[Books Details] Details Request', props<{ id: string }>());
export const detailsSuccess = createAction('[Books Effects] Details Success', props<{ volDetails: BookDetailsResult }>());
export const detailsFailure = createAction('[Books Effects] Details Failure', props<{ error: HttpErrorResponse }>());

export const wishlistAddRequest = createAction('[Books Details] Wishlist Add Request', props<{ book: BookDetailsResult }>());
export const wishlistRemoveRequest = createAction('[Books Details] Wishlist Remove Request', props<{ book: BookDetailsResult }>());
export const wishlistItemAdded = createAction('[Books Effects] Wishlist Item Added', props<{ book: BookDetailsResult }>());
export const wishlistItemRemoved = createAction('[Books Effects] Wishlist Item Removed', props<{ book: BookDetailsResult }>());

export const wishlistNavigation = createAction('[Main Header] Wishlist Shown');
export const searchlistNavigation = createAction('[Main Header] Searchlist Shown');

