import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {



  @Output() avisarCambioNombre = new EventEmitter<string>();
  @Output() avisarCambioApellido = new EventEmitter<string>();
  @Output() avisarCambioCorreo = new EventEmitter<string>();
  @Output() avisarCambioSkill = new EventEmitter<string>();

  cambiarNombre(event){
    this.avisarCambioNombre.emit(event.target.value);
  }
  cambiarApellido(event){
    this.avisarCambioApellido.emit(event.target.value);
  }
  cambiarCorreo(event){
    this.avisarCambioCorreo.emit(event.target.value);
  }

  cambiarSkill(skill){
    this.avisarCambioSkill.emit(skill);
  }



  constructor() { }

  ngOnInit() {
  }

}
