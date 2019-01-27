import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[only-alphabet]'
})
export class OnlyAlphabet {
  constructor(public el:ElementRef) {
    this.el.nativeElement.onkeypress = (evt : any)=>{
          if((!((evt.which >= 97 && evt.which <=122) || (evt.which >=65 && evt.which <=90))) ){
              evt.preventDefault();
              //for mozila firefox =>&& evt.which !=8
          }
    }
     
  }
}

@Directive({
  selector: '[OnlyDigit]'
})
export class OnlyDigit {
  constructor(public onlydigit:ElementRef) {
    this.onlydigit.nativeElement.onkeypress = (evt : any)=>{
          if((!((evt.which >= 48 && evt.which <=57))) ){
              evt.preventDefault();
          }
    }
  }
}