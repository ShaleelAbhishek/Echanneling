import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private services: ServicesService,
    ) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }


  logout(){

    this.services.logout();
  }

}
