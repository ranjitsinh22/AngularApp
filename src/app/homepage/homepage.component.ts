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
    this.getProducts();
    this.getCart();
  }

  getProducts(): void {
    this.http.get('http://localhost:3000/products').subscribe(
      (response: any) => {
        this.products = response;
      },
      (error) => {
        console.log('Failed to fetch products');
      }
    );
  }

  getCart(): void {
    this.http.get('http://localhost:3000/cart').subscribe(
      (response: any) => {
        this.cart = response;
      },
      (error) => {
        console.log('Failed to fetch cart');
      }
    );
  }

  isProductInCart(product: any): boolean {
    return this.cart.some((item) => item.productId === product.id);
  }

  getCartQuantity(product: any): number {
    const cartItem = this.cart.find((item) => item.productId === product.id);
    return cartItem ? cartItem.quantity : 0;
  }

  addToCart(product: any): void {
    const cartItem = {
      productId: product.id,
      quantity: 1
    };

    this.http.post('http://localhost:3000/cart', cartItem).subscribe(
      (response) => {
        console.log('Added to cart');
        this.getCart();
      },
      (error) => {
        console.log('Failed to add to cart');
      }
    );
  }

  changeQuantity(product: any, quantity: number): void {
    const cartItem = this.cart.find((item) => item.productId === product.id);
    if (cartItem) {
      const newQuantity = cartItem.quantity + quantity;
      if (newQuantity >= 0) {
        cartItem.quantity = newQuantity;

        this.http
          .put(`http://localhost:3000/cart/${cartItem.id}`, cartItem)
          .subscribe(
            (response) => {
              console.log('Quantity updated');
              this.getCart();
            },
            (error) => {
              console.log('Failed to update quantity');
            }
          );
      }
    }
  }
}
