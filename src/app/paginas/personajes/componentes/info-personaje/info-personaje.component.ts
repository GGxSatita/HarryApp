import { Component, Input, OnInit } from '@angular/core';
import { Personaje} from './../../../../modelo/personaje';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.component.html',
  styleUrls: ['./info-personaje.component.scss'],
})
export class InfoPersonajeComponent implements OnInit {
  @Input() public url!:string;
  public personaje!: Personaje;

  constructor(
    private  httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<Personaje>(this.url)
    .subscribe(resultado => {
      this.personaje = resultado;
    });
  }

}
