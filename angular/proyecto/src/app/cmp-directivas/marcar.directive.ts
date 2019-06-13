import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @Input('appMarcar') color: string = 'red';
  @HostBinding('style.backgroundColor') colorFondo: string;
  // Para obtener la instancia se hace de esta manera
  constructor(private elemRef: ElementRef) {
    console.log(elemRef.nativeElement);
  }

  ngOnInit() {
    //  this.elemRef.nativeElement.style.backgroundColor = 'yellow';
    //  //Para añadir otra clase se hace asi, tambien se puede rmover 
    //  this.elemRef.nativeElement.classList.add('letraAzul');
    //  this.elemRef.nativeElement.addEventListener('click',()=>{
    //    console.log('Algo');
    //  });

    // this.colorFondo = 'color';

  }

  @HostListener('click') onclick(){
    console.log('Algo');
  }

  @HostListener('mouseover') onmouseover(){
    this.colorFondo = this.color;
  }
  @HostListener('mouseleave') onmouseleave(){
    this.colorFondo = 'white';
  }


 

}

