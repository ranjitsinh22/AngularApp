import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addToCart(product: any) {
    throw new Error('Method not implemented.');
  }



  constructor() { }
  ngOnInit(): void {
  }



}