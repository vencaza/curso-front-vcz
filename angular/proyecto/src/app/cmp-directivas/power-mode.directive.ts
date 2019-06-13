import { Directive , ElementRef, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  @HostBinding('style.marginTop') marginTop: string;
  @HostBinding('style.marginLeft') marginLeft: string;
  @HostBinding('style.color') color: string;
  constructor(private elemRef: ElementRef) {
    console.log(elemRef.nativeElement);
  }
  @HostListener('input') onInput(){
    this.marginTop = "10px";
    this.marginLeft = "35px";
    let c1 = Math.floor(Math.random() * (255 - 0) + 0);
    let c2 = Math.floor(Math.random() * (255 - 0) + 0);
    let c3 = Math.floor(Math.random() * (255 - 0) + 0);
    console.log(c1,c2,c3);
    this.color = `rgb(${c1},${c2},${c3})`;
    console.log(this.color);
    setTimeout(() => {
      this.marginTop = "25px";
      this.marginLeft = "50px";
       c1 = Math.floor(Math.random() * (255 - 0) + 0);
       c2 = Math.floor(Math.random() * (255 - 0) + 0);
       c3 = Math.floor(Math.random() * (255 - 0) + 0);
       console.log(c1,c2,c3);
       this.color = `rgb(${c1},${c2},${c3})`;
     }, 350);    
     
     
     
  }


}
