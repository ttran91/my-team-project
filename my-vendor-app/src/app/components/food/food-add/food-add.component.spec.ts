import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddComponentRxjs } from './food-add.component';

describe('FoodAddComponentRxjs', () => {
  let component: FoodAddComponentRxjs;
  let fixture: ComponentFixture<FoodAddComponentRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAddComponentRxjs ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodAddComponentRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


