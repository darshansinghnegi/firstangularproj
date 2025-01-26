import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {
  constructor(private route:Router){}
  roster = [
    { name: 'John Doe', shift: 'Morning', days: 'Mon-Fri', isEditing: false },
    { name: 'Jane Smith', shift: 'Evening', days: 'Mon-Fri', isEditing: false },
  ];

  attendanceRecords = [
    { name: 'John Doe', timestamp: '2025-01-25 08:00', image: 'path-to-image' },
    { name: 'Jane Smith', timestamp: '2025-01-25 08:30', image: 'path-to-image' },
  ];

  logout(){
    this.route.navigate(['login'])
  }
  saveChanges(staff: any) {
    // Optionally, you can add any validation before saving the data
    staff.isEditing = false; // Toggle back to view mode
  }
  save:boolean=false
}
