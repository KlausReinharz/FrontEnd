import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private usrlBasePersona="http://localhost:9090/api/persona";

  constructor(private clientHttp: HttpClient) { }

  /*obtenerCredencialesUsuario(): Observable<Usuario[]>{
    return this.clientHttp.get<Usuario[]>(this.urlBaseUsuario);
  }*/

  obtenerDatosPersona():Observable<Persona[]>{
    return this.clientHttp.get<Persona[]>(this.usrlBasePersona);
  }
}
