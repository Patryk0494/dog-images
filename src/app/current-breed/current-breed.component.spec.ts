import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBreedComponent } from './current-breed.component';

describe('CurrentBreedComponent', () => {
  let component: CurrentBreedComponent;
  let fixture: ComponentFixture<CurrentBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
