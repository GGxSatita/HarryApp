import { Component, OnInit, ViewChild} from '@angular/core';
import {ObtenerPersonajeService} from './servicios/obtener-personaje.service';

import {Info, ResultadoPeticion} from './../../modelo/resultado-peticion';
import {IonInfiniteScroll} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) public miInfinito : IonInfiniteScroll;

  public formulario : FormGroup;

  constructor(
    public obtenerPersonaje : ObtenerPersonajeService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.formulario= this.formBuilder.group({

      nombrePersonaje : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(17),
      ])
    });

    this.obtenerPersonaje.obtener20primeros();

  }
  public cargarMasPersonajes(event : Event): void{
    this.obtenerPersonaje.obetenerMasPersonajes();
    this.miInfinito.complete();
  }
}
