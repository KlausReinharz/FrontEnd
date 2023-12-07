import { Component} from '@angular/core';
import { Persona } from '../persona';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})


export class PersonaComponent {

  persona?: Persona[];
  
  
  constructor(private usuarioServicio: UsuarioService){ }

  ngInit(){
    this.DatosPersona();
  }  


    DatosPersona(){
      this.usuarioServicio.obtenerDatosPersona().subscribe(
        (datos =>{
          this.persona=datos;
          console.log(this.persona);
        }) 
      );
    }
}
