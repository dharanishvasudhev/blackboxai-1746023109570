import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup-login',
  templateUrl: './user-signup-login.component.html',
  styleUrls: ['./user-signup-login.component.css']
})
export class UserSignupLoginComponent {
  isLoginMode = true;
  email = '';
  password = '';
  name = '';

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      alert('User Login with email: ' + this.email);
      // Implement login logic here
    } else {
      alert('User Signup with name: ' + this.name + ', email: ' + this.email);
      // Implement signup logic here
    }
  }
}
