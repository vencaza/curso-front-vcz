import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  datos:Array<string> = [];
  constructor(private _datosService: DatosService) { }
  datoRecibido: string;

  ngOnInit() {
    this.datos = this._datosService.datos;
    this._datosService.datoEmitido.subscribe((dato) =>{
      this.datoRecibido = dato;
    });
  }
  add(value){
    this._datosService.addDato(value);
  }
 

}
