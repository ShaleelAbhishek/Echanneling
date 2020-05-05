import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})
export class CreateDoctorComponent implements OnInit {
  
  tableData : any;
  createDoctor: FormGroup;
  submitted = false;
  
  constructor(private services: ServicesService,
    private formBuilder: FormBuilder,private router: Router) {

      this.services = services;
     }
  
  ngOnInit(): void {
    this.createDoctor= this. formBuilder.group({
      selectCategory:['',Validators.required],
      doctorName:['',Validators.required],
      telephone1:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      telephone2:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    
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

  }

  get controlerData() {
    return this.createDoctor.controls;
  }


  
  uploadSubmit() {
     
  
    if (this.createDoctor.valid) {
      let userdata = {
        "categoryId":this.controlerData.selectCategory.value,
        "doctorName": this.controlerData.doctorName.value,
        "telephones":[{"telNumber":this.controlerData.telephone1.value},{"telNumber":this.controlerData.telephone2.value}]
        
        
      }
      console.log('SUBMIT');
      console.log(userdata);
       
     
      const formData = new FormData();
      
      this.services.saveDoctor(userdata)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(["dashboard/createDoctor"]);
            // this.submitted = false;
            this.createDoctor.reset();
          },
          error => {
            alert("Oops!")
            console.log(error);
            return;
          }
        )

    } else {
      alert("Invalid data!")
      return;
    }


  }

  

}
