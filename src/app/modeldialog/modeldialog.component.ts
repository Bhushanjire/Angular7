import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modeldialog',
  templateUrl: './modeldialog.component.html',
  styleUrls: ['./modeldialog.component.scss']
})
export class ModeldialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
