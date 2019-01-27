import { Component, OnInit,Inject } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HeaderService } from '../header.service';
import {ISubscription} from "rxjs/Subscription";
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModeldialogComponent } from '../modeldialog/modeldialog.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subscription: ISubscription;
  userData;
  employeeData;
  showHideLogo = true;
  userTable = false;
  emploeeTable = false;
  searchDataRecord ;
  addEmployee;
  employeeObject;
  deleteId;
  name;
  formButtonLabel='';
  empArray;
  email;
  mobile_no;
  id;


  constructor(private myservice : HeaderService,private router:Router,private dialog: MatDialog,private toaster : ToastrService) { }

//send data to header component to footer component through buttton click
  sendData(val){
    this.myservice.sendHMessage(val);
  }
  sendDataLeft(val){
    var arr1 = [{
      name : 'bhushan',
      mobile_no : '9763075620'
    }]

    this.myservice.sendLeftMessage(val);
  }

  ngOnInit() {
//send data to header component to footer component through onload

    var arr=['bhushan','nitin','ketan'];
    this.myservice.storeMessage(arr);

//observable example
const myobservable = Observable.create((observer : Observer<string>)=>{
setTimeout(()=>{
  observer.next('first package');
},2000);
setTimeout(()=>{
  observer.next('Second Package');
},4000);
setTimeout(()=>{
  observer.error('this does notwork');
},9000);
setTimeout(()=>{
  observer.complete();
},6000);
setTimeout(()=>{
  observer.next('Third Package');
},4000);
});

myobservable.subscribe(
  (data : string)=>{console.log(data);},
  (error : string)=>{console.log(error);},
  () =>{console.log("Completed")},
)
/*
this.myservice.getAPIData().subscribe(responce =>{
  console.log(responce);
  this.userData = responce;
});
*/
setTimeout(()=>{
  this.showHideLogo=false;
  this.userTable =false;
  this.emploeeTable = true;
},1000);


this.myservice.getEmoloyeeData().subscribe(responce =>{
  this.employeeData = responce;
  //console.log(this.employeeData);
});

}


  addNewEmployee(){
 const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddemployeeComponent, 
      {
        height:'450px',
        width:'550px',
        data : {formButtonLabel:'Add'}
      });

    dialogRef.afterClosed().subscribe(result => {
       if(result){
        this.myservice.getEmoloyeeData().subscribe(responce =>{
          this.employeeData = responce;
          this.toaster.success("Record added succssfully");
        });
       
       }else{
         
       }
       
    });
  }
  editEmployee(empId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.employeeObject = {
      id : empId
    };
  this.myservice.getEmployeeDetails(this.employeeObject).subscribe(responce =>{
    //this.employeeData = responce;
    for(let values of responce){
      this.id=values.id;
      this.name = values.name;
      this.email = values.email;
      this.mobile_no = values.mobile_no;

    }
    
    //alert(this.name+" "+this.email);
    const dialogRef = this.dialog.open(AddemployeeComponent,{
      height:'500px',
      width:'550px',
      data : {
        formButtonLabel:'Update',
        id :this.id,
        name : this.name,
        email : this.email,
        mobile_no : this.mobile_no
    }
    });
 dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.myservice.getEmoloyeeData().subscribe(responce =>{
            this.employeeData = responce;
            this.toaster.success("Record updated succssfully");
          });
          
        }else{      
        }
       
    });


  });
  
  }


  deleteEmployee(empId){
    this.deleteId ={
      id:empId
    }
    this.toaster.success('Record Deleted Successfull','Deleted');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ModeldialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
       if(result){
       
        this.myservice.delEmployee(this.deleteId).subscribe(responce =>{
          this.myservice.getEmoloyeeData().subscribe(responce =>{
            this.employeeData = responce;

            this.toaster.success("Record deleted succssfully");
          });
                //this.router.navigate(['/header']);
              });
       }else{
         
       }
       
    });



  }

  


}
