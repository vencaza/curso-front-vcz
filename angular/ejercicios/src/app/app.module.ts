import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { ListaComponent } from './ejercicio/lista/lista.component';
import { FormComponent } from './ejercicio/form/form.component';
import { TareaComponent } from './ejercicio/lista/tarea/tarea.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    ListaComponent,
    FormComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
