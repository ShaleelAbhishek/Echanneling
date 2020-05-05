import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  tableData: any;
  viewAppointment: FormGroup;
  patientId:any;
  appointmentId:any;
  response:any;

  constructor(private services:ServicesService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {


    this.patientId = JSON.parse(sessionStorage.getItem('user')).patientId;

    this.services.getAppointments(this.patientId)
    .subscribe(
      response=>{

        console.log(response);
        this.appointmentId =response.appointmentId;
        this.tableData = response;
      },
      error=>{
        console.log(error);
      }
    )
  }


  

  deleteAppointment(id){

 this.services.deleteAppointment(id)
    .subscribe(
      response=>{

        console.log(response);
        
        // this.tableData = response;
        window.location.reload();
      },
      error=>{
        console.log(error);
      }

    )

}


}
