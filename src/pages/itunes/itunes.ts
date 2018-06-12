import { Component } from '@angular/core';
import { CancionItunes } from '../../app/cancionItunes.interface';
import { ItunesService } from '../../app/itunes.service';
import { AlertController } from 'ionic-angular';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Network } from '@ionic-native/network';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-itunes',
  templateUrl: 'itunes.html',
  providers: [ItunesService]
})

export class ItunesPage {

  private textoBusqueda: string; //Valor caja busqueda en la plantilla
  private lista_canciones: CancionItunes[];
  private esta_conectado: boolean;

  constructor(
    private itunes_service: ItunesService,
    private networkInterface: NetworkInterface,
    private network: Network,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

    /*this.networkInterface.getWiFiIPAddress().catch
    ( ip => {alert( ip );console.log (ip)} );
    this.networkInterface.getCarrierIPAddress().catch
    ( ip => alert( ip ) );*/

    this.esta_conectado = true;
    console.log("El tipo de red es " + this.network.type);// === 'wifi'

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.esta_conectado = false;
    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected :-)'); this.esta_conectado = true;
      console.log("El tipo de red es " + this.network.type);// === 'wifi'
    });

  }


  buscaItunes(): void //Es de tipo void porque no devuelve nada
  {


    if (this.esta_conectado) //Comprobar si esta conectado
    {

      let loading = this.loadingCtrl.create({content: 'Please wait...', spinner: 'dots'});
      
      loading.present();

      this.itunes_service.getListaCancionesItunes(this.textoBusqueda).subscribe
        (
        listaok => {
          this.consumirRespuestaListaCanciones(listaok);
          //setTimeout(() => {loading.dismiss();}, 5000);
          loading.dismiss();
        },
        error => this.showAlert("Error", "Se produjo un error en la llamada a itunes"),
      );
    }
    else this.showAlert("Aviso", "No estas conectado a Internet");
  }

  consumirRespuestaListaCanciones(listaok: any) {

    this.lista_canciones = <CancionItunes[]>listaok.results;

    if (this.lista_canciones.length > 0)
      for (let index = 0; index < this.lista_canciones.length; index++) {

        console.log(this.lista_canciones[index]);

      }
    else this.showAlert("Aviso", "Tu busqueda no tiene resultados");

  }


  showAlert(titulo: string, mensaje: string) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }


}
