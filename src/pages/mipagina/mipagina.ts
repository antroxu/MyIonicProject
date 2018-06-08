import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mipagina',
  templateUrl: 'mipagina.html',
  providers: [PersonaService]
})

export class MyPage {

  private peso: number;
  private estatura: number;
  private resultado: number;
  private persona: Persona;
  private persona_cargada : boolean;
  private lista_personas : Persona[];



  constructor(private persona_service: PersonaService, private alertCtrl: AlertController) {

    this.estatura = 1.89;
    this.peso = 85;
    this.persona_cargada = false;
    //this.persona = new Persona("Angel", 1.78, 86)
    //this.persona = persona_service.getPersona();
    persona_service.getListaPersonasHttp().subscribe
    (listaok => this.consumirRespuestaListaPersonas(listaok));

    persona_service.getPersonaHttp().subscribe(
      ok => this.consumirRespuestaPersona(ok));

  }

  mostrarPersona (persona : Persona) : void
  {

      console.log (persona.nombre);
      console.log (persona.estatura);
      console.log (persona.peso);

  }

  consumirRespuestaListaPersonas(listaok: any) {

    this.lista_personas = <Persona[]>listaok;
    console.log ("LP = " + this.lista_personas);

    for (let index = 0; index<this.lista_personas.length; index++)
    {

      this.mostrarPersona (this.lista_personas[index]);

    }

    //Otra forma de recorrer una lista
    this.lista_personas.map (persona => this.mostrarPersona(persona));


  }

  consumirRespuestaPersona(ok: any) {

    this.persona = <Persona>ok;
    this.persona_cargada = true;
    console.log("persona rx " + " " + this.persona.peso + " " + this.persona.estatura);
    this.showAlert();


  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK', 'OK2']
    });
    alert.present();
  }





  calculaIMC() {
    console.log("Ha llamado a calcula IMC");
    let imc: number = 0;

    imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);

    console.log("IMC: " + imc);

    this.resultado = imc;

  }



}
