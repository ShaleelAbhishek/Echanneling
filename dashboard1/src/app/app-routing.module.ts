import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ViewAppointmentComponent } from './modules/view-appointment/view-appointment.component';
import { UserRegistrationComponent } from './modules/user-registration/user-registration.component';
import { AppointmentComponent } from './modules/appointment/appointment.component';
import { FindDoctorComponent } from './modules/find-doctor/find-doctor.component';
import { CreateDoctorComponent } from './modules/create-doctor/create-doctor.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { DoctorProfileComponent } from './modules/doctor-profile/doctor-profile.component';
import { LoginComponent } from './modules/login/login.component';
import { ViewAllAppointmentsComponent } from './modules/view-all-appointments/view-all-appointments.component';
import { ViewAllPatientsComponent } from './modules/view-all-patients/view-all-patients.component';





const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'registration',component: UserRegistrationComponent},
  
  {path: 'dashboard',component: DefaultComponent,
    children: [
      {path: 'main',component: DashboardComponent},
      {path: 'addAppointment',component: AppointmentComponent},
      {path: 'viewAppointments',component: ViewAppointmentComponent},
      {path: 'findDoctor',component: FindDoctorComponent}, 
      {path: 'createDoctor',component: CreateDoctorComponent},
      {path: 'userProfile',component: UserProfileComponent},
      {path: 'doctorProfile/:id',component: DoctorProfileComponent},
      {path: 'allAppointments',component: ViewAllAppointmentsComponent},
      {path: 'patients',component: ViewAllPatientsComponent},    
],
 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
