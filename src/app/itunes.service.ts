import { Injectable } from "@angular/core";
//import { Persona } from "./persona.model";
import { CancionItunes } from './cancionItunes.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()


export class ItunesService {

    //static URL_SERVICIO_PERSONAS: string = "http://10.1.2.10:8080/appwebprofe/GetPersona";
    //static URL_SERVICIO_LISTA_PERSONAS: string = "http://10.1.2.10:8080/appwebprofe/GetListaPersonas";
    static URL_SERVICIO_ITUNES1: string = "https://itunes.apple.com/search?term=";
    static URL_SERVICIO_ITUNES2: string = "&media=music&limit=20";


    constructor(private http: HttpClient) {


    }

    getListaCancionesItunes(textoBusqueda: string): Observable<CancionItunes[]> {

        let servicio: string;

        let lista_canciones_remota: Observable<CancionItunes[]>;

        servicio = ItunesService.URL_SERVICIO_ITUNES1;
        servicio = servicio + textoBusqueda;
        servicio = servicio + ItunesService.URL_SERVICIO_ITUNES2;

        lista_canciones_remota = this.http.get<CancionItunes[]>(servicio);

        return lista_canciones_remota;
    }

    /*
    getPersonaHttp (): Observable<Persona>
    {        
        let persona_remota : Observable<Persona>;

        persona_remota = this.http.get<Persona> ( PersonaService.URL_SERVICIO_PERSONAS);

        return persona_remota;
    }

    getListaPersonasHttp (): Observable<Persona[]>
    {
        let lista_persona_remota : Observable<Persona[]>;

        lista_persona_remota = this.http.get<Persona[]> ( PersonaService.URL_SERVICIO_LISTA_PERSONAS);

        return lista_persona_remota;
    }

    getPersona(): Persona
    {
        let persona: Persona;

        persona = new Persona("Juan", 1.90, 80);

        return persona;
    }
    */

}