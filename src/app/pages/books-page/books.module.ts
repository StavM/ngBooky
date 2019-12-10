/*
 * Books module, this module is the main feature moduel of booky.
 * it contains all the logic related to booky search, wishlist, and books details.
 * all booky related content should reside here.
*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { BookImagePipe } from './bookimg.pipe';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksPageComponent } from './books-page.component';
import { BooksSearchBarComponent } from './books-search/books-search-bar/books-search-bar.component';
import {
  BooksSearchResultItemComponent,
} from './books-search/books-search-results/books-search-result-item/books-search-result-item.component';
import {
  BooksSearchResultsPagerComponent,
} from './books-search/books-search-results/books-search-results-pager/books-search-results-pager.component';
import { BooksSearchResultsComponent } from './books-search/books-search-results/books-search-results.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { BooksWishlistItemComponent } from './books-wishlist/books-wishlist-item/books-wishlist-item.component';
import { BooksWishlistComponent } from './books-wishlist/books-wishlist.component';
import { bookRoutes } from './books.routes';
import { BooksEffects } from './store/books.effects';
import * as fromBooks from './store/books.reducer';

@NgModule({
  declarations: [
    BookImagePipe,
    BooksPageComponent,
    BooksSearchBarComponent,
    BooksSearchResultsComponent,
    BooksSearchResultItemComponent,
    BooksDetailsComponent,
    BooksSearchResultsPagerComponent,
    BooksWishlistComponent,
    BooksWishlistItemComponent,
    BooksSearchComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(bookRoutes),
    StoreModule.forFeature('books', fromBooks.booksReducer),
    EffectsModule.forFeature([BooksEffects])
  ],
  entryComponents: [
    BooksDetailsComponent
  ]
})
export class BooksModule { }
