import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {
  public nombre  : string = '';

  constructor(
    private activateRouter : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(parametros =>{
      this.nombre = parametros.nombrePersonaje;
    });
  }

}
