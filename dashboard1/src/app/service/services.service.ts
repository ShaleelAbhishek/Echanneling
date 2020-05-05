
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class ServicesService {

    private serverUrlpatient: string ='http://localhost:8081';
    private serverUrlspecialty: string ='http://localhost:8083';
    private serverUrldoctor: string ='http://localhost:8082';
    private serverUrlappointment: string ='http://localhost:8084';
    doctorId: any;
    
    


    constructor(private http: HttpClient,private router: Router) {
        this.http = http;
    }


    login(data){
      console.log('SERVICE');
      console.log(data);
      return this.http.post<any>( this.serverUrlpatient+'/authenticate',data).pipe(
        map( userdata =>{
          console.log('qqqqq',userdata.token)
          sessionStorage.setItem('user',JSON.stringify(userdata.user))
          sessionStorage.setItem('token','Bearer '+userdata.token)
        }
      ))
    }


    logout(){
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('token')
      this.router.navigate([""]);


    }

    savePatientDetails(data):Observable<any>{
        console.log('SERVICE');
        console.log(data);
        return this.http.post( this.serverUrlpatient+'/save',data)
        // .pipe(map())
    
    }

    updatePatientDetails(data){
      const header =new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : sessionStorage.getItem('token')
      })
      console.log(header);
      return this.http.put( this.serverUrlpatient+'/patient/update',data)
    }

    

    getPatientById(id) {
      return this.http.get(this.serverUrlpatient + '/patient/getPatientById/'+id);
    }
    getAllCategories() {
        return this.http.get(this.serverUrlspecialty + '/specialty/getSpecialties');
      }

      saveDoctor(data):Observable<any>{
          console.log('SERVICE');
          console.log(data);
          return this.http.post( this.serverUrldoctor+'/doctor/save',data)
      }
    

      getDoctoyByCategory(id) {
        return this.http.get(this.serverUrlspecialty + '/specialty/doctors/'+id);
      }

      getAllDoctors(){
          return this.http.get(this.serverUrldoctor+ '/doctor/getDoctors');
      }

      getDoctoyById(id) {
        return this.http.get(this.serverUrldoctor + '/doctor/getDoctor/'+id);
      }

      setDoctorId(id){
          this.doctorId = id;
      }

      getDoctorId(){
        return this.doctorId;
        // console.log(this.id)
      }

      saveAppointment(userdata){
        return this.http.post(this.serverUrlappointment + '/appointment/save',userdata)
      }

      getAppointments(id){
        return this.http.get<any>(this.serverUrlappointment + '/appointment/getByUserId/'+id)
      }

      deleteAppointment(id){
        return this.http.delete(this.serverUrlappointment + '/appointment/deleteAppointment/'+id)
      }

      getAllAppointments(){
        return this.http.get(this.serverUrlappointment + '/appointment/getAllAppointments')
      }

      getAllPatients(){
        return this.http.get(this.serverUrlpatient + '/patient/getPatient')
      }



}