import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FindDoctorComponent } from '../find-doctor/find-doctor.component';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {


  id:any;
  data:any;
  doctorProfiles: FormGroup;
  tableData:any;
  constructor(private services:ServicesService,
    private formBuilder: FormBuilder,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.id = this.services.getDoctorId()
    
    
    // console.log(this.data)

    this.services.getDoctoyById(this.id)
    .subscribe(
      response=>{
        
        this.tableData = response;
        console.log(this.tableData);
      },
      error=>{
        console.log(error);
      }
    )

  }
  

 

}
