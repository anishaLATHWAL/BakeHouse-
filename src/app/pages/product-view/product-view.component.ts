import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
// import { items } from '../../items';
import { CommonModule, NgIf } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgIf, CommonModule, NavbarComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent implements OnInit {
  data: any;
  constructor(
    private productService: ProductServiceService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productService.currentData.subscribe((data) => (this.data = data));
  }
  addToCart(item: any) {
    const newItem = {
      name: item.name,
      price: item.price,
      flavor: item.flavor,
      quantity: 1,
    };
    this.cartService.addItem(newItem);
    // send to cart page
    this.router.navigate(['/cart']);
  }
  buyNow(item: any) {
    const newItem = {
      name: item.name,
      price: item.price,
      flavor: item.flavor,
      quantity: 1,
    };
    this.cartService.addItem(newItem);
    // send to cart page
    this.router.navigate(['/payment']);
  }
}
