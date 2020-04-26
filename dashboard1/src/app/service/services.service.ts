
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ServicesService {

    private serverUrlpatient: string ='http://localhost:8081';
    private serverUrlspecialty: string ='http://localhost:8083';
    private serverUrldoctor: string ='http://localhost:8082';
    doctorId: any;
    


    constructor(private http: HttpClient) {
        this.http = http;
    }

    savePatientDetails(data):Observable<any>{
        console.log('SERVICE');
        console.log(data);
        return this.http.post( this.serverUrlpatient+'/patient/savePatient',data)
        // .pipe(map())
    
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

    // saveCustomerOwnerDetails(customer){
    //     return this.http.post(this.serverUrl2 +'/save',customer)
    // }

    // saveRentDetails(rent){
    //     return this.http.post(this.serverUrl + '/service/save',rent)
    // }
    // getAllCars(){
    //     return this.http.get( this.serverUrl +'/service/findAllCars');
    // }
    // getUsers(){
    //     return this.http.get( this.serverUrl2 +'/get')
    // }
    // getUsersById(id){
    //     return this.http.get(this.serverUrl2 + `/service/get/${id}`)
    // }
    // updateUsers(userData) {

    //     return this.http.put(this.serverUrl2 + '/service/update', userData);
    //   }
    //   getUsersByActivity(){
    //     return this.http.get(this.serverUrl2 + '/getActive')
    // }


}