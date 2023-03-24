import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEducacionComponent } from './components/main-educacion/main-educacion.component';
import { GradosObtComponent } from './components/grados-obt/grados-obt.component';
import { CertisObtComponent } from './components/certis-obt/certis-obt.component';
import { CentrosEstudComponent } from './components/centros-estud/centros-estud.component';



@NgModule({
  declarations: [
    MainEducacionComponent,
    GradosObtComponent,
    CertisObtComponent,
    CentrosEstudComponent
  ],
  exports:[
    MainEducacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EducacionModule { }
