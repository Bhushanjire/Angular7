import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public addEmployeeData ={
    name : "Bhushan Jire",
    mobile : '999999999',
    email : 'test@gmail.com'
  };
  private messageSource = new BehaviorSubject('');
  getMessage = this.messageSource.asObservable();

  private messageHSource = new BehaviorSubject('');
  getHMessage = this.messageHSource.asObservable();

  private messageLeftSource = new BehaviorSubject('');
  getLeftMessage = this.messageLeftSource.asObservable();


  constructor(private httpClient : HttpClient) {
   }

   storeMessage(message: any) {
    this.messageSource.next(message)
  }

  sendHMessage(message: any) {
    this.messageHSource.next(message)
  }

sendLeftMessage(message : any){
  this.messageLeftSource.next(message);
}

public getAPIData(){
  return this.httpClient.get('http://jsonplaceholder.typicode.com/users').pipe(map((res:any)=>res));
}

public getEmoloyeeData(){
  let headers =new Headers();
  return this.httpClient.get('https://vegaroma.in/Bhushan_demo/ws/list_all_employee.php').pipe(map((res:any)=>res));

}
public addEmployee(data){
  return this.httpClient.post('http://vegaroma.in/Bhushan_demo/ws/insert_employee.php',data).pipe(map((res:any)=>res));
}
public delEmployee(id : any){
  return this.httpClient.post('http://vegaroma.in/Bhushan_demo/ws/delete_employee.php',id).pipe(map((res:any)=>res));
}

public  getEmployeeDetails(id : any) {
  return this.httpClient.post('https://vegaroma.in/Bhushan_demo/ws/list_all_employee.php',id).pipe(map((res:any)=>res));
}

public  updateEmployeeDetails(id : any) {
  return this.httpClient.post('https://vegaroma.in/Bhushan_demo/ws/update_employee.php',id).pipe(map((res:any)=>res));
}


}
