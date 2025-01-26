import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManagerDashboardComponent } from '../manager-dashboard/manager-dashboard.component';
import { StaffPortalComponent } from '../staff-portal/staff-portal.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
    //   {
    //   path:'',
    //   component:DashboardComponent
    // },
    { path: 'manager-dashboard', component:ManagerDashboardComponent },
    { path: 'staff-portal', component:StaffPortalComponent },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
