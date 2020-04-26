import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { UserRegistrationComponent } from './modules/user-registration/user-registration.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicesService } from './service/services.service';
import { TestDoctorComponent } from './modules/test-doctor/test-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    TestDoctorComponent,
    
    
    
    
    
    
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    

    
    
  
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
