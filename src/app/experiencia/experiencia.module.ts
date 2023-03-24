import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainExperienciaComponent } from './components/main-experiencia/main-experiencia.component';
import { TrabajoExperienciaComponent } from './components/trabajo-experiencia/trabajo-experiencia.component';
import { GruposExperienciaComponent } from './components/grupos-experiencia/grupos-experiencia.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MainExperienciaComponent,
    TrabajoExperienciaComponent,
    GruposExperienciaComponent
  ],
  exports: [
    MainExperienciaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ExperienciaModule { }
