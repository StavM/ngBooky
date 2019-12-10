import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchResultsComponent } from './books-search-results.component';

describe('BooksSearchResultsComponent', () => {
  let component: BooksSearchResultsComponent;
  let fixture: ComponentFixture<BooksSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
