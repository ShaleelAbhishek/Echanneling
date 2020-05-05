import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.scss']
})
export class ViewAllPatientsComponent implements OnInit {
  tableData: any;
  patientId:any;

  constructor(private services:ServicesService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {


    // this.patientId = JSON.parse(sessionStorage.getItem('user')).patientId;

    this.services.getAllPatients()
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
