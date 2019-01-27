import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MatDialogRef} from '@angular/material';
import { HeaderService } from '../header.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  name = "";
  email;
  mobile_no;
  employeeObject;
  employeeData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog,private myservice : HeaderService,public dialogRef: MatDialogRef<AddemployeeComponent>) { }

  ngOnInit() {
  }

  saveEmployee(id){

    this.employeeObject = {
      id:id,
      name : this.name,
      mobile : this.mobile_no,
      email : this.email
    }

    if(id>0){
      this.myservice.updateEmployeeDetails(this.employeeObject).subscribe(responce => {
      // alert("Employee updated successfully");
       this.dialogRef.close('Edit Employee closed');
      });
    }else{
    this.myservice.addEmployee(this.employeeObject).subscribe(responce =>{
      this.myservice.getEmoloyeeData().subscribe(responce =>{
        this.employeeData = responce;
        //alert("Employee added successfully");
        this.dialogRef.close('Add Employee closed');
      });
    });
  }
      
    
    

  }

}
