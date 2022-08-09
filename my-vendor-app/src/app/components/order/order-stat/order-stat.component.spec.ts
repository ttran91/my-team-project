import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatComponent } from './order-stat.component';

describe('OrderStatComponent', () => {
  let component: OrderStatComponent;
  let fixture: ComponentFixture<OrderStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
