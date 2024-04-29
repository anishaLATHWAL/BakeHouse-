import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  // get localstorage items
  user: any;

  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if (this.user) {
      this.user = JSON.parse(this.user);
      console.log(this.user)
    }
  }
}
