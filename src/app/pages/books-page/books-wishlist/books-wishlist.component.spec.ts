import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWishlistComponent } from './books-wishlist.component';

describe('BooksWishlistComponent', () => {
  let component: BooksWishlistComponent;
  let fixture: ComponentFixture<BooksWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
