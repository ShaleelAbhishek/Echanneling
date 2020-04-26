import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ViewAppointmentComponent } from 'src/app/modules/view-appointment/view-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from 'src/app/modules/appointment/appointment.component';
import { FindDoctorComponent } from 'src/app/modules/find-doctor/find-doctor.component';
import { CreateDoctorComponent } from 'src/app/modules/create-doctor/create-doctor.component';
import { ServicesService } from 'src/app/service/services.service';
import { UserProfileComponent } from 'src/app/modules/user-profile/user-profile.component';
import { DoctorProfileComponent } from 'src/app/modules/doctor-profile/doctor-profile.component';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AppointmentComponent,
    ViewAppointmentComponent,
    FindDoctorComponent,
    CreateDoctorComponent,
    UserProfileComponent,
    DoctorProfileComponent,
    
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [ServicesService],
  bootstrap: [DefaultComponent]
 
})
export class DefaultModule { }
