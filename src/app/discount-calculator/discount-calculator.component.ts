import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-calculator',
  templateUrl: './discount-calculator.component.html',
  styleUrls: ['./discount-calculator.component.css']
})
export class DiscountCalculatorComponent {
  originalPrice: number;
  discountPercentage: number;
  discountedPrice: number;

  calculateDiscountedPrice() {
    const discountAmount = this.originalPrice * (this.discountPercentage / 100);
    this.discountedPrice = this.originalPrice - discountAmount;
  }
}
