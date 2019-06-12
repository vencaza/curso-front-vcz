import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpFormularioComponent } from './cmp-formulario/cmp-formulario.component';
import { CmpCvComponent } from './cmp-cv/cmp-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpFormularioComponent,
    CmpCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
