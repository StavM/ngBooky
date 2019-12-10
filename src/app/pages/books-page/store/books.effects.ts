import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { BooksDetailsComponent } from '../books-details/books-details.component';
import { BooksHttpService } from '../books.http.service';
import * as BooksActions from './books.actions';

// set a delay from when adding to wishlist until its actually added
// this allows animations to complete
const WISHLIST_ANIMATION_DELAY_IN_MSEC = 300;

// set the width of the details modal dialog
const DETAILS_DIALOG_WIDTH = environment.books.details.dialogWidth;

// time period the snackbar is shown to the user before autocloses.
const SNACK_DURATION_IN_MSEC = environment.books.details.snackDurationInMsec;

// horizental location of the snackbar ('start' | 'center' | 'end' | 'left' | 'right')
const SNACK_HORIZENTAL_POS = environment.books.details.snackHorizentalPos as MatSnackBarHorizontalPosition;

@Injectable()
export class BooksEffects {

  constructor(
    private actions$: Actions,
    private booksHttpService: BooksHttpService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  /*
  * a book search request.
  * when a search request or a paged search request is dispatched, we fetch results
  * from our booksHttpService and forward them to a searchSuccess action
  * to be placed in the store from within the reducer.
  */
  getBookSearchResults$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.searchRequest, BooksActions.searchRequestPaged),
    switchMap((action) => {
      const searchTerm = action.searchTerm;
      const startIndex = action.startIndex ? action.startIndex : 0;
      return this.booksHttpService.getBookSearchResults(searchTerm, startIndex).pipe(
        map(searchResults => BooksActions.searchSuccess({ searchResults })),
        catchError(error => of(BooksActions.searchFailure({ error }))));
    })
  ));

  /*
  * a details dialog request.
  * shows a dialog to the user displaying book details. it accepts a VolumeID as a prameter.
  * the BooksDetailsComponent is responsible on dispatching the XHR to get the actual data
  * from the service
  */
  detailsDialogRequest$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.detailsDialogRequest),
    exhaustMap((action) => {
      const data = action.id;
      const maxWidth = DETAILS_DIALOG_WIDTH;
      const dialogRef = this.dialog.open(BooksDetailsComponent, { data, maxWidth });
      return dialogRef.afterClosed();
    }),
    map(() => BooksActions.detailsDialogClosed())
  ));

  /*
  * a get details request.
  * this is responsible for fetching a specific VolumeID's details.
  * accepts a VolumeID and fetches the details via the booksService.
  */
  getDetails$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.detailsRequest),
    switchMap((action) =>
      this.booksHttpService.getBookVolumeDetails(action.id).pipe(
        map(volDetails => BooksActions.detailsSuccess({ volDetails })),
        catchError(error => of(BooksActions.detailsFailure({ error }))))
    )
  ));

  /*
  * add item to wishlist.
  * accepts a book details result and tries to add it to wishlist
  * we pipe a delay operator to negate flickering buttons on the details component.
  */
  wishlistAddRequest$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.wishlistAddRequest),
    delay(WISHLIST_ANIMATION_DELAY_IN_MSEC),
    map((action) => BooksActions.wishlistItemAdded({ book: action.book })
    ))
  );

  /*
  * remove an item from wishlist.
  * accepts a book details result and tries to remove it from the wishlist
  * we pipe a delay operator to negate flickering buttons on the details component.
  */
  wishlistRemoveRequest$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.wishlistRemoveRequest),
    delay(WISHLIST_ANIMATION_DELAY_IN_MSEC),
    map((action) => BooksActions.wishlistItemRemoved({ book: action.book })
    ))
  );

  // show snackbar on wishlist item added.
  wishlistAdded$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.wishlistItemAdded),
    map((action) => {
      const syntax = `❤️ ${action.book.volumeInfo.title} was added to your wishlist.`;
      return this.snackbar.open(syntax, null, { duration: SNACK_DURATION_IN_MSEC, horizontalPosition: SNACK_HORIZENTAL_POS });
    })
  ), { dispatch: false });

  // show snackbar on wishlist item removed.
  wishlistRemoved$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.wishlistItemRemoved),
    map((action) => {
      const syntax = `💔 ${action.book.volumeInfo.title} was removed from your wishlist.`;
      return this.snackbar.open(syntax, null, { duration: SNACK_DURATION_IN_MSEC, horizontalPosition: SNACK_HORIZENTAL_POS });
    })
  ), { dispatch: false });

  // navigate to wishlist page.
  showWishlist$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.wishlistNavigation),
    tap(() => this.router.navigate(['main', 'books', 'wishlist']))
  ), { dispatch: false });

  // navigate to search page.
  showSearch$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.searchlistNavigation),
    tap(() => this.router.navigate(['main', 'books', 'search']))
  ), { dispatch: false });
}
