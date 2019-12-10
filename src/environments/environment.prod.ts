export const environment = {
  production: true,
  intro: {
    navigatonDelayInMsec: 3000,
  },
  books: {
    api: {
      booksApi: 'https://www.googleapis.com/books/v1/volumes'
    },
    search: {
      defaultSearch: { searchTerm: 'Angular' },
      maxResults: 20,
      searchDebounceRateInMsec: 500,
    },
    results: {
      defaultImage: 'https://via.placeholder.com/150x300',
    },
    details: {
      snackDurationInMsec: 3000,
      snackHorizentalPos: 'left',
      dialogWidth: '1200px'
    }
  }
};


