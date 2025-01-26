import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { ManagerDashboardComponent } from './manager-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagerDashboardComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ManagerDashboardRoutingModule
  ]
})
export class ManagerDashboardModule { }
