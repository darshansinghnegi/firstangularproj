import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffPortalRoutingModule } from './staff-portal-routing.module';
import { StaffPortalComponent } from './staff-portal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaffPortalComponent
  ],
  imports: [
    CommonModule,FormsModule,
    StaffPortalRoutingModule

  ]
})
export class StaffPortalModule { }
