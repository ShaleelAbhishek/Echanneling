import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})


export class UserRegistrationComponent implements OnInit {




  userRegistration: FormGroup;
  submitted = false;
  constructor(private services: ServicesService,
    private formBuilder: FormBuilder,private router: Router) {

      this.services = services;
     }

     ngOnInit() {
      this.userRegistration= this. formBuilder.group({
        patientName:['',Validators.required],
        userName:['',Validators.required],
        patientEmail: ['',[Validators.required,Validators.email]],
        age: ['',Validators.required],
        // idCardNumber: ['',[Validators.required, Validators.idCardNumber]],
        gender: ['',Validators.required],
        telephone1: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        telephone2: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        address: ['',Validators.required],
        password: ['',Validators.required],
      
      })
    }

    get controlerData() {
      return this.userRegistration.controls;
    }
    
    uploadSubmit() {
     
  
      if (this.userRegistration.valid) {
        let userdata = {
          "patientName": this.controlerData.patientName.value,
          "patientEmail": this.controlerData.patientEmail.value,
          "gender": this.controlerData.gender.value,
          "age": this.controlerData.age.value,
          // "idCardNumber": this.controlerData.age.value,
          "userName": this.controlerData.userName.value,
          "password": this.controlerData.password.value,
          

          "address":{
            "address":this.controlerData.address.value
          },

          "telephones":[{"telNumber":this.controlerData.telephone1.value},{"telNumber":this.controlerData.telephone2.value}],
          "role" : "User"
          
        }
        console.log('SUBMIT');
        console.log(userdata);
         
       
        const formData = new FormData();
        //formData.append('car', JSON.(userdata));
  
  
  
  
        this.services.savePatientDetails(userdata)
          .subscribe(
            response => {
              console.log(response);
              this.router.navigate([""]);
              // this.submitted = false;
              
              this.userRegistration.reset();
            },
            error => {
              console.log(error);
              alert("oopss!")
              return;
            }
          )
  
      } else {
        alert("Invalid Data! Try again")
        return;
      }
  
  
    }



}
