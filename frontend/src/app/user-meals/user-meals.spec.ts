import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeals } from './user-meals';

describe('UserMeals', () => {
  let component: UserMeals;
  let fixture: ComponentFixture<UserMeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
