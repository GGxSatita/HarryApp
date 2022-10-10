import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PersonajesPageRoutingModule } from './personajes-routing.module';

import { PersonajesPage } from './personajes.page';

import { InfoPersonajeComponent } from './componentes/info-personaje/info-personaje.component';
import { ObtenerPersonajeService } from './servicios/obtener-personaje.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PersonajesPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [PersonajesPage, InfoPersonajeComponent],

  providers:[
    ObtenerPersonajeService
  ]
})
export class PersonajesPageModule {}
