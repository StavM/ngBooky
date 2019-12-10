/*
 * Books http service (w/ Google Books API).
 * this service contains all the calls to http endpoints related to booky®.
 * all booky's http xhrs should go through here.
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BookDetailsResult, BookSearchResults } from './books.model';

const BASE_URL = environment.books.api.booksApi;

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService {

  constructor(private http: HttpClient) { }

  /* returns an observable emitting the results of a book search
   * params:
   * searchTerm - any string to search for
   * startIndex - a zero based number representing the starting PAGE of expected results
   *              used for pagination.
   *              example: ('hello', 5, 20) will return 20 results, skipping the first 5 results. etc..
   * maxResults - maximum results to return (max is 40).
   */
  getBookSearchResults(searchTerm: string, startIndex: number = 0, maxResults: number = 20): Observable<BookSearchResults> {
    searchTerm = searchTerm ? searchTerm.trim() : '';
    const SEARCH_URL_QUERY = '?q=';
    const SEARCH_URL_FIELDS = '&fields=items/volumeInfo(title,subtitle,authors,imageLinks/smallThumbnail),items/id,totalItems';
    const SEARCH_URL_SINDEX = '&startIndex=';
    const SEARCH_URL_RLIMIT = '&maxResults=';

    // tslint:disable: max-line-length
    const searchurl = `${BASE_URL}${SEARCH_URL_QUERY}${searchTerm}${SEARCH_URL_FIELDS}${SEARCH_URL_RLIMIT}${maxResults}${SEARCH_URL_SINDEX}${startIndex}`;
    // tslint:enable: max-line-length

    return this.http.get<BookSearchResults>(searchurl);
  }

  /* returns an observable emitting the details of a specific book.
   * params:
   * id - a specific book's VolumeID.
   */
  getBookVolumeDetails(id: string): Observable<BookDetailsResult> {
    const VOL_URL_FIELDS = '?fields=id,volumeInfo(title,authors,publisher,description,imageLinks/small)';
    const volumeurl = `${BASE_URL}/${id}${VOL_URL_FIELDS}`;

    return this.http.get<BookDetailsResult>(volumeurl);
  }
}
