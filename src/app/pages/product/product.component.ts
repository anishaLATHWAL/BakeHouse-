import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { items } from '../../items';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, CommonModule, MatIcon, NavbarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  items = items;
  data: any;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private productService: ProductServiceService
  ) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe((data) => (this.data = data));
  }

  onLinkClick(data: any) {
    this.productService.changeData(data);
    this.router.navigate(['/product-view']);
  }
}
