import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyinterceptorInterceptor } from './myinterceptor.interceptor';
// import { WebcamModule } from 'ngx-webcam';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ModalModule,HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: MyinterceptorInterceptor, multi: true
    }
  ],


  schemas: [CUSTOM_ELEMENTS_SCHEMA],



  bootstrap: [AppComponent]
})
export class AppModule { }
