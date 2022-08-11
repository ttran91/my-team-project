import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponentRxjs } from './food-list.component';

describe('FoodlistComponentRxjs', () => {
  let component: FoodListComponentRxjs;
  let fixture: ComponentFixture<FoodListComponentRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListComponentRxjs ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListComponentRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
