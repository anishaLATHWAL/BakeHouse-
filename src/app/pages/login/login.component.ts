import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore'; // Import the Firestore module fr
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  email: string = '';
  password: string = '';
  async login(event: Event) {
    event.preventDefault();
    await signInWithEmailAndPassword(this.auth, this.email, this.password).then(
      async (userCredential) => {
        getDoc(doc(this.firestore, 'users', userCredential.user.uid))
          .then((doc) => {
            if (doc.exists()) {
              console.log('User data:', doc.data());
              localStorage.setItem('user', JSON.stringify(doc.data()));
              this.router.navigate(['/home']);
            } else {
              console.log('No such document!');
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
          });
      }
    );
  }
}
