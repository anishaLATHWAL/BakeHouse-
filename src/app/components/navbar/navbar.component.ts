import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showFiller = false;
  /* if auth then set auth true */
  isAuth: boolean = false;
  private auth: Auth = inject(Auth);
  constructor(private router: Router) {}
  async logout() {
    /* logout user */
    await this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      console.log('User logged out successfully');
    });
    this.isAuth = false;
  }
  async ngOnInit() {
    /* check if user is logged in */
    const data = localStorage.getItem('user');
    this.auth.onAuthStateChanged((user) => {
      if (user && data) {
        this.isAuth = true;
      } else {
        localStorage.removeItem('user');
        this.isAuth = false;
      }
    });
  }
}
