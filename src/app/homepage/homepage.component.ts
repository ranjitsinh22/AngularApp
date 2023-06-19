import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  cart: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
  }

  addToCart(product: any) {
    this.cart.push(product);
  }


}
