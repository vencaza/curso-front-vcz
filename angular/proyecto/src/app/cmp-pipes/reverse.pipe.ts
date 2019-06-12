import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let palabra = value.replace(/ /g,''); 
    let arrayPalabra = palabra.split(''); 
    let arrayPalabraReves = arrayPalabra.reverse();     
    let palabraReves = arrayPalabraReves.join('');
    return palabraReves;
  }

}
