import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
generos: Array<any> =[];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getGeneros().subscribe((datos)=>{
      console.log(datos);
      this.generos = datos;
    });
  }



}
