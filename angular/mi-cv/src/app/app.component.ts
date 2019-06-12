import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  skill: string[] = [];

 
  cambiarNombre(rnombre){
    this.nombre = rnombre;
  }
  cambiarApellido(rapellido){
    this.apellido = rapellido;
  }
  cambiarCorreo(rcorreo){
    this.correo = rcorreo;
  }

  cambiarSkill(rskill){
    this.skill.push(rskill);
  }
}
