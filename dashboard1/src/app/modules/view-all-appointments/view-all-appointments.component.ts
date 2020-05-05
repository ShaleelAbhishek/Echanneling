import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-appointments',
  templateUrl: './view-all-appointments.component.html',
  styleUrls: ['./view-all-appointments.component.scss']
})
export class ViewAllAppointmentsComponent implements OnInit {

 
  tableData: any;
  viewAllAppointment: FormGroup;
  patientId:any;

  constructor(private services:ServicesService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {


    // this.patientId = JSON.parse(sessionStorage.getItem('user')).patientId;

    this.services.getAllAppointments()
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

}

