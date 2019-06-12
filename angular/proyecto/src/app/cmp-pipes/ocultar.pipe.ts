import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, args?: Array<string>): string {
    let replace = "*";
    let arrayvalue = value.split(' ');
    console.log(arrayvalue);
    console.log(args);
    for (let palabra in args) {
      for (let frase in arrayvalue) {
        if (args[palabra] == arrayvalue[frase]) {
          let valor = arrayvalue[frase].length;
          arrayvalue[frase] = replace.repeat(valor);
        }
      }
    }
    return arrayvalue.join(' ');
  }
}
