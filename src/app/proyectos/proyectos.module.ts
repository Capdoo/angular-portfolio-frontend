import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProyectosComponent } from './components/main-proyectos/main-proyectos.component';
import { PetsProyectosComponent } from './components/pets-proyectos/pets-proyectos.component';
import { BlogProyectosComponent } from './components/blog-proyectos/blog-proyectos.component';
import { CrudProyectosComponent } from './components/crud-proyectos/crud-proyectos.component';
import { OtherProyectosComponent } from './components/other-proyectos/other-proyectos.component';



@NgModule({
  declarations: [
    MainProyectosComponent,
    PetsProyectosComponent,
    BlogProyectosComponent,
    CrudProyectosComponent,
    OtherProyectosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProyectosModule { }
