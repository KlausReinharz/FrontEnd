import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario: Usuario[];
  persona: Persona[];

  constructor(private usuarioServicio: UsuarioService){}


  ngOnInit(){
    this.ObtenerCredenciales();
  }

  private ObtenerCredenciales(){
    this.usuarioServicio.obtenerCredencialesUsuario().subscribe(
      (datos =>{
        this.usuario = datos;
      })
    );
  }

}
