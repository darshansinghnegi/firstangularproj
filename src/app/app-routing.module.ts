import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardModule } from './manager-dashboard/manager-dashboard.module';
import { StaffPortalModule } from './staff-portal/staff-portal.module';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { StaffPortalComponent } from './staff-portal/staff-portal.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
 { path: 'login', component: LoginComponent },
 { path : 'layout',
  loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
 { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
