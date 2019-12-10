/* a model representing Google Books API search results payload.
 * totalItems - an estimated amount of possible search results for the supplied term.
 * items - actual part of the search results (up to MAX RESULTS defined per page in the environment).
*/
export interface BookSearchResults {
  totalItems: number;
  items: BookSearchResult[];
}

export interface BookSearchResult {
  id: string;
  volumeInfo: BookSearchResultVolume;
}

export interface BookSearchResultVolume {
  title: string;
  subtitle: string;
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
  };
}

/* a model representing Google Books API books details payload.
 * id - the result's VolumeID as defined by google books API.
 * volumeInfo - metadata regarding that result.
*/
export interface BookDetailsResult {
  id: string;
  volumeInfo: BookDetailsResultVolume;
}

export interface BookDetailsResultVolume {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  imageLinks: {
    small: string;
  };
}
