import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {


  tableData : any;
  addAppointment: FormGroup;
  submitted = false;

  constructor(private services: ServicesService,
    private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.addAppointment= this. formBuilder.group({
      selectDoctor:'',
      patientId:'',
      appointmentDate:'',
      appointmentStartTime:'',
    
    })


    this.services.getAllDoctors()
    .subscribe(
      response=>{
        console.log(response);
        this.tableData = response;
      },
      error=>{
        console.log(error);
      }
    )

  }

  get controlerData() {
    return this.addAppointment.controls;
  }

  uploadSubmit() {
     
    if (this.addAppointment.valid) {
      let userdata = {
        "doctorId":this.controlerData.selectDoctor.value,
        "patientId": JSON.parse(sessionStorage.getItem('user')).patientId,
        "appointmentDate":this.controlerData.appointmentDate.value,
        "appointmentStartTime":this.controlerData.appointmentStartTime.value, 
      }
      // console.log('SUBMIT');
      // console.log(userdata);
      const formData = new FormData();
      
      this.services.saveAppointment(userdata)
        .subscribe(
          response => {
            console.log(response);
           
            // this.submitted = false;
            this.addAppointment.reset();
      
          },
          error => {
            console.log(error);
            return;
          }
        )

    } else {
      return;
    }

  }

}
