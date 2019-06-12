import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent {

 nombre = 'Venecia';
 activadoModoEdicion: boolean = false;
  /*Solo se usa para instanciar los servicios */

  changeModoEdicion(){

    this.activadoModoEdicion = !this.activadoModoEdicion;
  }

  resetNombre(){
    this.nombre = '';
  }

  cambioNombre(event){
    console.log(event.target.value);
    this.nombre = event.target.value;
  }

  mostrarValor(valor){
    console.log(valor);
  }


}
