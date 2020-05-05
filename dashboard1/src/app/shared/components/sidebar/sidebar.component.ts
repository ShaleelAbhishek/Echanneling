import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isAdmin
  userName;
  constructor() { }

  ngOnInit(): void {
    this.userName = JSON.parse(sessionStorage.getItem('user')).patientName; 
    this.isAdmin = this.checkAdmin();
  }

  checkAdmin(){
    let role= JSON.parse(sessionStorage.getItem('user')).role;
    console.log("role",role)
    if(role == "Admin"){
      console.log("admin")
      return true;
    } else {
      return false;
    }
  }

}
