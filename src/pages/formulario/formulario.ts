import { Component, style } from '@angular/core';
import { Login } from '../../app/login.model';

@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html',
  // styles: [`p { font-size: 40px}`]
})
export class FormularioComponent {

  login: Login;
  
  constructor() {
    this.login = new Login();

  }

  acceder (datos:Login, valido: boolean){

    if (valido){
      //Procesa datos
      console.log ("Los datos son válidos");
    }
    else {
      //Error
      console.log ("Los datos no son válidos");
    }

    console.log ("Datos rx " + datos.nombre + " " + datos.pwd + " " + datos.pwd2);

  }

}
