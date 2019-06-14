import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../tarea';
import { ServiceTareaService } from '../../service-tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
@Input() tarea: Tarea;

  constructor(private _service: ServiceTareaService) { }

  ngOnInit() {
  }

  completar(){
    this._service.completarTarea(this.tarea);
  }
  deshacer(){
    this._service.deshacerTarea(this.tarea);
  }
  eliminar(){
    this._service.deleteTarea(this.tarea);

  }

}
