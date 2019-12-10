import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchResultsPagerComponent } from './books-search-results-pager.component';

describe('BooksSearchResultsPagerComponent', () => {
  let component: BooksSearchResultsPagerComponent;
  let fixture: ComponentFixture<BooksSearchResultsPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchResultsPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchResultsPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
