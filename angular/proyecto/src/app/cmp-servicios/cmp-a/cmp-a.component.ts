import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  datos:Array<string> = [];
  constructor(private _datosService: DatosService) { }

  ngOnInit() {
    this.datos = this._datosService.datos;
  }

  add(value){
    this._datosService.addDato(value);
  }

  emitir(value): void{
    this._datosService.emitirDato(value);
  }

}
