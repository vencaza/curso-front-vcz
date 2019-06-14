import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea';
import { ServiceTareaService } from '../service-tarea.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<Tarea>();
  constructor(private _service: ServiceTareaService) { }  

  ngOnInit() {
  }

  addTarea(value){
    let id =  Math.floor(Math.random()*999);
    this._service.addTarea(new Tarea(id, value, false));
  }

}
