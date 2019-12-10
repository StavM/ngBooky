import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchResultItemComponent } from './books-search-result-item.component';

describe('BooksSearchResultItemComponent', () => {
  let component: BooksSearchResultItemComponent;
  let fixture: ComponentFixture<BooksSearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
