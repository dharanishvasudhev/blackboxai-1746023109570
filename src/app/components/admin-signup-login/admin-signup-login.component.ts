import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-signup-login',
  templateUrl: './admin-signup-login.component.html',
  styleUrls: ['./admin-signup-login.component.css']
})
export class AdminSignupLoginComponent {
  isLoginMode = true;
  email = '';
  password = '';
  name = '';

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      alert('Admin Login with email: ' + this.email);
      // Implement admin login logic here
    } else {
      alert('Admin Signup with name: ' + this.name + ', email: ' + this.email);
      // Implement admin signup logic here
    }
  }
}
