import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  retorno:any = {
    message: '',
    estado: '',
    error: '',
  }

  lis:any = [];

  constructor(public afAunth: AngularFireAuth) { }

  createUser(r){

    // try {
    //   console.log(this.afAunth.auth.createUserWithEmailAndPassword(r.correo, r.password));
    //   this.retorno.message = "Usuario registrado correctamente";
    //   this.retorno.estado = true;
    // } catch (error) {
    //   this.retorno.message = "Error al registrar Usuario";
    //   this.retorno.estado = false; 
    // }

    // return this.retorno;    
    // if (this.afAunth.auth.createUserWithEmailAndPassword(r.correo, r.password)){
    //   this.retorno.message = "Usuario registrado correctamente";
    //   this.retorno.estado = true;
    //   return this.retorno;
    // }else{
    //   this.retorno.message = "Error al registrar Usuario";
    //   this.retorno.estado = false; 
    //   return this.retorno;
    // };
    // console.log(r.correo);

    // this. retorno.estado = true;
    // var lis = [];
    // Agregar un nuevo usuario
    this.lis = this.afAunth.auth.createUserWithEmailAndPassword(r.correo, r.password).catch(function(error) {
      // Handle Errors here.
      
      var errorCode = error.code;
      var errorMessage = error.message;
      // this.retorno.estado = false;
      console.log(errorMessage);
      // this.retorno.message = error.message;
      // this.retorno.error = error.message;
      var liss = errorMessage;
      return liss;
    });
    console.log(this.lis.i);
    return this.lis;
  }
}
