import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  id:any;
  userProfile: FormGroup;
  password1:any;
 // submitted = false;
  // user;

  constructor(private services: ServicesService,
    private formBuilder: FormBuilder,private router: Router) {

      // this.user = JSON.parse(sessionStorage.getItem('user'));
      
      // this.services = services;
      // this.fetchUserdata()
     }

     ngOnInit() {
      this.userProfile= this. formBuilder.group({
        patientName:['',Validators.required],
        userName:['',Validators.required],
        patientEmail: ['',Validators.required],
        age: ['',Validators.required],
        // idCardNumber: ['',Validators.required],
        gender: ['',Validators.required],
        telephone1: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        telephone2: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        address: ['',Validators.required],
        password1: ['',Validators.required],
        id:['',Validators.required]
        
      
      })
     this.fetchUserdata()

    }

    fetchUserdata(){
      console.log("wqwdddddnbbnnnnnnnnnnnnnnnnnnnnnnnnnnnndwqwqww",sessionStorage.getItem('user'));

      // this.id=this.controlerData.patientId;

       this.userProfile.controls['id'].setValue(JSON.parse(sessionStorage.getItem('user')).patientId);
      this.userProfile.controls['patientName'].setValue(JSON.parse(sessionStorage.getItem('user')).patientName);
      this.userProfile.controls['userName'].setValue(JSON.parse(sessionStorage.getItem('user')).userName);
      this.userProfile.controls['patientEmail'].setValue(JSON.parse(sessionStorage.getItem('user')).patientEmail);
      this.userProfile.controls['age'].setValue(JSON.parse(sessionStorage.getItem('user')).age);
      // this.userProfile.controls['idCardNumber'].setValue(JSON.parse(sessionStorage.getItem('user')).idCardNumber);

      this.userProfile.controls['gender'].setValue(JSON.parse(sessionStorage.getItem('user')).gender);
      this.userProfile.controls['telephone1'].setValue(JSON.parse(sessionStorage.getItem('user')).telephones[0].telNumber);
      this.userProfile.controls['telephone2'].setValue(JSON.parse(sessionStorage.getItem('user')).telephones[1].telNumber);
      this.userProfile.controls['address'].setValue(JSON.parse(sessionStorage.getItem('user')).address.address);
      this.userProfile.controls['password1'].setValue(JSON.parse(sessionStorage.getItem('user')).password);
      // this.services.getPatientById(JSON.parse(sessionStorage.getItem('user')).patientId).subscribe(data=>{
      //   console.log("qqqqppoouu",data);
      // },error=>{
      //   console.log("error",error)
      // })
    }

    get controlerData() {
      return this.userProfile.controls;
    }
    
     uploadSubmit() {
      console.log("wqwdddddnbbnnnnnnnnnnnnnnnnnnnnnnnnnnnndwqwqww",sessionStorage.getItem('user'));

  
      if (this.userProfile.valid) {
        let userdata = {
          "patientId": this.controlerData.id.value,
          "patientName": this.controlerData.patientName.value,
          "patientEmail": this.controlerData.patientEmail.value,
          "gender": this.controlerData.gender.value,
          "age": this.controlerData.age.value,
          
          "userName": this.controlerData.userName.value,
          "password": this.controlerData.password1.value,
          // "password": this.user.password,
          

          "address":{
            "address":this.controlerData.address.value
          },

          "telephones":[{"telNumber":this.controlerData.telephone1.value},{"telNumber":this.controlerData.telephone2.value}]
          
          
        }
        console.log('SUBMIT');
        console.log(userdata);
         
       
        const formData = new FormData();
        //formData.append('car', JSON.(userdata));
  
  
  
  
        this.services.updatePatientDetails(userdata)
          .subscribe(
            response => {
              console.log("popopopop",response);
              sessionStorage.setItem('user', JSON.stringify(response))
              // this.submitted = false;
              // this.userRegistration.reset();
              window.location.reload();
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
