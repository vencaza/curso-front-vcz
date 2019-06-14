import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceTareaService {

  private _tareas:Array<Tarea> = [];
  private _nuevatareas:Array<Tarea> = [];
  tareasCambiadas = new EventEmitter<Array<Tarea>>();
  URL_TAREAS = 'https://todo-list-603ba.firebaseio.com/mis-tareas';
  
  constructor(private http: HttpClient) { }

  // get tarea(): Array<Tarea>{


  //   return this._tareas;
  // }
  gettarea(){
    return this.http.get(`${this.URL_TAREAS}.json`).pipe(
      map((datos) =>{
        let tareas = [];
        for(let id in datos){
          tareas.push(new Tarea(id, datos[id].nombre,datos[id].compelta));
        }
        this._tareas = tareas;
        return this._tareas;
      })
    );
  }

  addTarea(dato: Tarea): void{
    this._tareas.push(dato);
    console.log(this._tareas);
  }

  deleteTarea(tarea: Tarea): void {
    this.http.delete(`${this.URL_TAREAS}.json`);
  
    // this._tareas = this._tareas.filter(t => {
    //     return t.id != tarea.id;
    // });
    // this.tareasCambiadas.emit(this._tareas);

  }

  deleteTarea2(tarea: Tarea): void {
    
    for (let elem of this._tareas) {
      if (elem.id !== tarea.id) {
       this._nuevatareas.push(elem);
      }
    }
    this._tareas = this._nuevatareas;
    console.log(this._tareas);
  }

  completarTarea(tarea: Tarea): void {
    for (let elem of this._tareas) {
      if (elem.id === tarea.id) {
        elem.completa = true;
        console.log(elem);
      }
    }
  }
  deshacerTarea(tarea: Tarea): void {
    for (let elem of this._tareas) {
      if (elem.id === tarea.id) {
        elem.completa = false;
        console.log(elem);
      }
    }
  }


}
