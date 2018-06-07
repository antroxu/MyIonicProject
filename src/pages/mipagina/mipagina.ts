import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';

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



  constructor(persona_service: PersonaService) {

    this.estatura = 1.89;
    this.peso = 85;
    //this.persona = new Persona("Angel", 1.78, 86)
    this.persona = persona_service.getPersona();

  }

  calculaIMC() {
    console.log("Ha llamado a calcula IMC");
    let imc: number = 0;

    imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);

    console.log("IMC: " + imc);

    this.resultado = imc;

  }



}
