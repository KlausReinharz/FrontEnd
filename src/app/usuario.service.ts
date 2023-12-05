import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private urlBaseUsuario= "http://localhost:9090/usuarios-app/usuario";
  private usrlBasePersona= "http://localhost:9090/personas-app/persona"

  constructor(private clientHttp: HttpClient) { }

  obtenerCredencialesUsuario(): Observable<Usuario[]>{
    return this.clientHttp.get<Usuario[]>(this.urlBaseUsuario);
  }

  obtenerDatosPersona():Observable<Persona[]>{
    return this.clientHttp.get<Persona[]>(this.usrlBasePersona);
  }
}
