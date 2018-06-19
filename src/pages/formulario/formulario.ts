import { Component, style } from '@angular/core';
import { Login } from '../../app/login.model';
import { LoginService } from '../../app/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html',
  // styles: [`p { font-size: 40px}`]
  providers: [LoginService]
})
export class FormularioComponent {

  login: Login;
  
  constructor(private loginservice : LoginService) {
    this.login = new Login();

  }

  acceder (datos:Login, valido: boolean){

    if (valido){
      //Procesa datos
      console.log ("Los datos son válidos");
      let resp : Observable<object> = this.loginservice.postLogin(datos);
      resp.subscribe(
        ok => {
                console.log ("HA VUELTO");
                let vresp : HttpResponse<Object> = <HttpResponse<Object>>ok;                
                console.log ("CUERPO: " + vresp.body.saludo);
                console.log ("STATUS: " + vresp.status);

              },
        ko => {
                console.log ("Respiesta ERROR " + ko);
                let vresp : HttpResponse<Object> = <HttpResponse<Object>>ko;                
                console.log ("STATUS: " + vresp.status);

              },
        () => {
                console.log ("COMPLETADO"); 
              }
      )
    }
    else {
      //Error
      console.log ("Los datos no son válidos");
    }

    console.log ("Datos rx " + datos.nombre + " " + datos.pwd + " " + datos.pwd2);

  }

}
