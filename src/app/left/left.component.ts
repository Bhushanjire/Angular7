import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../header.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit,OnDestroy {
  releaseMessage: any;
  constructor(private myservice : HeaderService) { }

  leftVal;
  ngOnInit() {

    this.releaseMessage=this.myservice.getLeftMessage.subscribe(responce =>{
      console.log("Reponce from right to left "+responce);

      this.leftVal=responce;
    })
  }

  //unsubscribe observable
  ngOnDestroy(){
    this.releaseMessage.unsubscribe();
    console.log('unsubcribe');
  }

}
