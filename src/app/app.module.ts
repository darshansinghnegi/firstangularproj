import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditdialogboxComponent } from './editdialogbox/editdialogbox.component';


@NgModule({
  declarations: [
    AppComponent,
    EditdialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
