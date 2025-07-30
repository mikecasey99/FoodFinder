import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDisplay } from './food-display';

describe('FoodDisplay', () => {
  let component: FoodDisplay;
  let fixture: ComponentFixture<FoodDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
