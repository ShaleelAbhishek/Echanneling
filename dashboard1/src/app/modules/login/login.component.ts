import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  userLogin: FormGroup;
  submitted = false;

  constructor(private services: ServicesService,
    private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.userLogin= this. formBuilder.group({
     
      userName:'',
      password:''
    
    })
  }


  get controlerData() {
    return this.userLogin.controls;
  }
  
  uploadSubmit() {
   

    if (this.userLogin.valid) {
      let userdata = {
        
        "userName": this.controlerData.userName.value,
        "password": this.controlerData.password.value,
        
      }

      console.log('SUBMIT');
      console.log(userdata);
       
     
      const formData = new FormData();
      //formData.append('car', JSON.(userdata));




      this.services.login(userdata)
        .subscribe(
          response => {
            console.log(response);
           alert("Login Success!")
            this.router.navigate(["/dashboard/main"]);
            // this.submitted = false;
            this.userLogin.reset();
          },
          error => {
            console.log(error);
            alert("Oops!")
            return;
          }
        )

    } else {
      alert("Invalid Password!")
    }



  }

  }


