import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { IndexModule } from './index/index.module';
import { AppRoutingModule } from './app-routing.module';
import { EducacionModule } from './educacion/educacion.module';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ContactoModule } from './contacto/contacto.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,

    IndexModule,
    EducacionModule,
    ExperienciaModule,
    ProyectosModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
