import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainIndexComponent } from './index/components/main-index/main-index.component';
import { MainEducacionComponent } from './educacion/components/main-educacion/main-educacion.component';
import { MainExperienciaComponent } from './experiencia/components/main-experiencia/main-experiencia.component';
import { MainProyectosComponent } from './proyectos/components/main-proyectos/main-proyectos.component';
import { MainContactoComponent } from './contacto/components/main-contacto/main-contacto.component';

const routes: Routes = [
  //Home
  { path: '', component: MainIndexComponent},
  { path: 'home', component: MainIndexComponent},
  { path: 'educacion', component: MainEducacionComponent},
  { path: 'experiencia', component: MainExperienciaComponent},
  { path: 'proyectos', component: MainProyectosComponent},
  { path: 'contacto', component: MainContactoComponent},


  { path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
