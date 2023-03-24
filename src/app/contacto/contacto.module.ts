import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContactoComponent } from './components/main-contacto/main-contacto.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainContactoComponent
  ],
  exports: [
    MainContactoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ContactoModule { }
