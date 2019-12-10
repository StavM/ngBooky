import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWishlistItemComponent } from './books-wishlist-item.component';

describe('BooksWishlistItemComponent', () => {
  let component: BooksWishlistItemComponent;
  let fixture: ComponentFixture<BooksWishlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWishlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWishlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
