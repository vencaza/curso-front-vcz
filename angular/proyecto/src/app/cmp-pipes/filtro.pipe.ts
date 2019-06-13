import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  //se aplican a objetos a arrays y son impuros el resto de los que se estaban haciendo a string u objetos son Puros True
  pure: false 
})
export class FiltroPipe implements PipeTransform {

  transform(mascotas: Array<string>, txtFiltro?: string): Array<string> {

    return mascotas.filter(mascota => mascota.toLowerCase().includes(txtFiltro));
  }

}
