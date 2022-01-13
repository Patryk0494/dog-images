import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddFavComponent } from './button-add-fav.component';

describe('ButtonAddFavComponent', () => {
  let component: ButtonAddFavComponent;
  let fixture: ComponentFixture<ButtonAddFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
