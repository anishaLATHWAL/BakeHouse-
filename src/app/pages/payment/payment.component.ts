import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  user: any;
  amount = this.cart.getTotal();
  paymentStatus = 'pending';
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if (this.user) {
      this.user = JSON.parse(this.user);
      console.log(this.user);
    }
  }
  constructor(private cart: CartService) {}
}
