import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

import { items } from '../../items';
import { NgFor } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CaroComponent } from '../../components/caro/caro.component';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatIcon,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    CaroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items = items;
  constructor(
    private router: Router,
    private productService: ProductServiceService
  ) {}
  onLinkClick(data: any) {
    this.productService.changeData(data);
    this.router.navigate(['/product-view']);
  }
}
