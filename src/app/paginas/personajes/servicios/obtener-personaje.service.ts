import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Info, ResultadoPeticion} from 'src/app/modelo/resultado-peticion';

@Injectable()

export class ObtenerPersonajeService {

  public resultado!: ResultadoPeticion;
  private url: string = 'https://hp-api.herokuapp.com/api/characters'
  public informaciones : Array<Info>=[];

  constructor(
    private client: HttpClient
  ){}
  public obtener20primeros(){
    this.client.get<ResultadoPeticion>(this.url)
    .subscribe(peticion => {
      this.resultado = peticion
      console.log(peticion);
      this.informaciones.push(...peticion.results);
    });
  }
  public obetenerMasPersonajes(){
    return this.client.get<ResultadoPeticion>(this.resultado.next)
    .subscribe(peticion => {
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);
    });
  }
}
