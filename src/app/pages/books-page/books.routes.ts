import { Routes } from '@angular/router';

import { BooksPageComponent } from './books-page.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { BooksWishlistComponent } from './books-wishlist/books-wishlist.component';

export const bookRoutes: Routes = [
  {
    path: '', component: BooksPageComponent, children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: BooksSearchComponent },
      { path: 'wishlist', component: BooksWishlistComponent }
    ]
  },
];
