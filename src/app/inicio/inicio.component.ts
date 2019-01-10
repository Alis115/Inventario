import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../services/autentificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  r:any = {
    correo:'',
    password:'',
  }
  retorno:any =[];
  constructor(private aut:AutentificacionService) { }

  ngOnInit() {
  }

  NuevoUsuario(){
    this.retorno = this.aut.createUser(this.r);
    console.log(this.retorno);
    // this.retorno = this.aut.createUser(this.r);
    // if(this.retorno.estado){
    //   console.log("Usuario agregado correctamente");
    // }else{
    //   console.log(this.retorno.message);
    // }
  }
}
