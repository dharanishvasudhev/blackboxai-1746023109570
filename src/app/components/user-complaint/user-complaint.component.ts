import { Component } from '@angular/core';

@Component({
  selector: 'app-user-complaint',
  templateUrl: './user-complaint.component.html',
  styleUrls: ['./user-complaint.component.css']
})
export class UserComplaintComponent {
  complaintText = '';

  onSubmit() {
    alert('Complaint submitted: ' + this.complaintText);
    // Implement complaint submission logic here
    this.complaintText = '';
  }
}
