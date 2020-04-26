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
        patientName:'',
        userName:'',
        patientEmail: '',
        age: '',
        gender:'',
        telephone1:'',
        telephone2:'',
        address:'',
        password:''
      
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
          "userName": this.controlerData.userName.value,
          "password": this.controlerData.password.value,
          

          "address":{
            "address":this.controlerData.address.value
          },

          "telephones":[{"telNumber":this.controlerData.telephone1.value},{"telNumber":this.controlerData.telephone2.value}]
          
          
        }
        console.log('SUBMIT');
        console.log(userdata);
         
       
        const formData = new FormData();
        //formData.append('car', JSON.(userdata));
  
  
  
  
        this.services.savePatientDetails(userdata)
          .subscribe(
            response => {
              console.log(response);
              this.router.navigate(["dashboard/main"]);
              // this.submitted = false;
              this.userRegistration.reset();
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
