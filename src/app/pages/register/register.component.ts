import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore'; // Import the Firestore module fr
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  email: string = '';
  password: string = '';
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  pincode: string = '';
  uid: string = '';

  async register(event: Event) {
    event.preventDefault();
    await createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(async (userCredential) => {
        this.uid = userCredential.user.uid;
        console.log('User registered successfully', userCredential.user);
        await setDoc(
          doc(this.firestore, 'users', userCredential.user.uid),
          {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            address: this.address,
            pincode: this.pincode,
            uid: this.uid,
          },
          { merge: true }
        );
      })
      .then(() => {
        console.log('User data saved successfully');
        /* send to home page */
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            address: this.address,
            pincode: this.pincode,
            uid: this.uid,
          })
        );
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error registering user', error);
      });
  }
}
