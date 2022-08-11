import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStatComponent } from './food-stat.component';

describe('FoodStatComponent', () => {
  let component: FoodStatComponent;
  let fixture: ComponentFixture<FoodStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
