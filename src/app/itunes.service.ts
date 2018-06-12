import { Injectable } from "@angular/core";
import { CancionItunes } from './cancionItunes.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()


export class ItunesService {

    static URL_SERVICIO_ITUNES1: string = "https://itunes.apple.com/search?term=";
    static URL_SERVICIO_ITUNES2: string = "&media=music&limit=20";


    constructor(private http: HttpClient) {  }

    getListaCancionesItunes(textoBusqueda: string): Observable<CancionItunes[]> {

        let servicio: string;

        let lista_canciones_remota: Observable<CancionItunes[]>;

        servicio = ItunesService.URL_SERVICIO_ITUNES1;
        servicio = servicio + textoBusqueda;
        servicio = servicio + ItunesService.URL_SERVICIO_ITUNES2;

        lista_canciones_remota = this.http.get<CancionItunes[]>(servicio);

        return lista_canciones_remota;
    }


}