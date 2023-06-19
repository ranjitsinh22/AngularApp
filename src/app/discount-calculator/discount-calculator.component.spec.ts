import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCalculatorComponent } from './discount-calculator.component';

describe('DiscountCalculatorComponent', () => {
  let component: DiscountCalculatorComponent;
  let fixture: ComponentFixture<DiscountCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
