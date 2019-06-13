import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {
@Input() oferta: Oferta; // = new Oferta('','','');
@Output() inscripcion = new EventEmitter<number>();

inscribirEnOferta(){
  // this.miNombre = "Venecia";
  this.inscripcion.emit(this.oferta.id);

}
  constructor() { }

  ngOnInit() {
  }

  

}
