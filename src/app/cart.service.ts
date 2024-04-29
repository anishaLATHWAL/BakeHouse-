import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface cartItems {
  name: string;
  price: number;
  flavor: string;
  quantity: 1;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: cartItems[] = [];
  private cartItemsSubject = new BehaviorSubject(this.cartItems);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addItem(item: any) {
    this.cartItems.push(item);
    this.cartItemsSubject.next(this.cartItems);
    console.log('Item added to cart', item);
  }

  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
