import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnDestroy {
  desmsg: any;

  constructor(private myservice : HeaderService) { 
    console.log('Footer Construtor called');
    }

  showVal;
  ngOnInit() {
     this.myservice.getMessage.subscribe(responce =>{
      console.log("Array Val=> "+responce);
    })

    this.desmsg=this.myservice.getHMessage.subscribe(responce =>{
      this.showVal=responce;
      console.log("Click Responce :  "+responce);
    })
  }
 //unsubscribe observable
  ngOnDestroy(){
    this.desmsg.unsubscribe();
    console.log('unsubcribe');
  }
  

}
