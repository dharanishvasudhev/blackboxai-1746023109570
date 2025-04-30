import { Component } from '@angular/core';

interface Complaint {
  id: number;
  user: string;
  text: string;
  status: string;
  adminReply?: string;
}

@Component({
  selector: 'app-admin-complaint-management',
  templateUrl: './admin-complaint-management.component.html',
  styleUrls: ['./admin-complaint-management.component.css']
})
export class AdminComplaintManagementComponent {
  complaints: Complaint[] = [
    { id: 1, user: 'User1', text: 'Complaint 1', status: 'Pending' },
    { id: 2, user: 'User2', text: 'Complaint 2', status: 'Pending' }
  ];

  replyText: string = '';
  selectedComplaintId: number | null = null;

  acceptComplaint(id: number) {
    const complaint = this.complaints.find(c => c.id === id);
    if (complaint) {
      complaint.status = 'Accepted';
    }
  }

  declineComplaint(id: number) {
    const complaint = this.complaints.find(c => c.id === id);
    if (complaint) {
      complaint.status = 'Declined';
    }
  }

  selectComplaint(id: number) {
    this.selectedComplaintId = id;
    const complaint = this.complaints.find(c => c.id === id);
    this.replyText = complaint?.adminReply || '';
  }

  replyToComplaint() {
    if (this.selectedComplaintId !== null) {
      const complaint = this.complaints.find(c => c.id === this.selectedComplaintId);
      if (complaint) {
        complaint.adminReply = this.replyText;
        alert('Reply sent to complaint ID ' + this.selectedComplaintId);
        this.replyText = '';
        this.selectedComplaintId = null;
      }
    }
  }
}
