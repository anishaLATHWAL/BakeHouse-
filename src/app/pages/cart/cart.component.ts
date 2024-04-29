import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems = this.cartService.getItems();
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    console.log('Cart Items', this.cartItems);
  }
  removeFromCart(item: any) {
    this.cartService.removeItem(item);
  }

  getTotal() {
    return this.cartService
      .getItems()
      .reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    this.router.navigate(['/payment']);
  }
}
