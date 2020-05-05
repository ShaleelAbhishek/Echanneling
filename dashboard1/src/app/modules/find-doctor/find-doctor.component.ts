import { Component, OnInit, Inject } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.scss']
})
export class FindDoctorComponent implements OnInit {

  tableData: any;
  findDoctor: FormGroup;
  tableData1: any;
  public doctorData: any;
  id: any;
  doctorId:any;

  constructor(private services:ServicesService,
              private formBuilder: FormBuilder,
              private router:Router) { }


RoutePage(data) {
  console.log(data)

  let id = data.doctorId
  console.log(id)
  this.services.setDoctorId(id)
  this.router.navigate(['/dashboard/doctorProfile',id,data]);


}

// SendDoctorId(data){
//   let doctorId = data.doctorId
// }
  

  ngOnInit(): void {

    this.findDoctor = this. formBuilder.group({
      selectCategory : ''
    
    })

    this.services.getAllCategories()
    .subscribe(
      response=>{
        console.log(response);
        this.tableData = response;
      },
      error=>{
        console.log(error);
      }
    )

    this.filterDoctorData("all");

    // get controlerData() {
    //   return this.findDoctor.controls;
    // }
  }

  filterDoctorData(filterVal:any) {
    if (filterVal == "0" || filterVal=="all"){
      this.services.getAllDoctors()
    .subscribe(
      response=>{
        console.log(response);
        this.tableData1 = response;
      },
      error=>{
        console.log(error);
      }
    )

    }else{
      this.services.getDoctoyByCategory(filterVal)
    .subscribe(
      response=>{
        console.log(response);
        this.tableData1 = response;
      },
      error=>{
        console.log(error);
      }
    )

    }
        
     
}
}
