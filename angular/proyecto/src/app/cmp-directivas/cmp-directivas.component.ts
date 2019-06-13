import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  aplicaLetraAzul : boolean = true;
  miColor: string = 'black';
  colores: Array<string> = ['green', 'blue', 'yellow'];
  pelicula = {
    titulo:'Peli 1',
    descripcion:'Descripcion 1'
  }

  cambioBackground(event){
    this.miColor = event.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
