import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { WhoAmiComponent } from './components/who-ami/who-ami.component';
import { WhatIdoComponent } from './components/what-ido/what-ido.component';
import { StacksIuseComponent } from './components/stacks-iuse/stacks-iuse.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainIndexComponent,
    WhoAmiComponent,
    WhatIdoComponent,
    StacksIuseComponent
  ],
  exports:[
    MainIndexComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class IndexModule { }
