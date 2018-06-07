import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()


export class PersonaService {

    constructor() { }

    getPersona(): Persona 
    {
        let persona: Persona;

        persona = new Persona("Juan", 1.90, 80);

        return persona;

    }

}