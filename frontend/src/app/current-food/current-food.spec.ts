import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFood } from './current-food';

describe('CurrentFood', () => {
  let component: CurrentFood;
  let fixture: ComponentFixture<CurrentFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
