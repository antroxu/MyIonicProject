import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MyPage } from '../pages/mipagina/mipagina';

import { ItunesPage } from '../pages/itunes/itunes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { NetworkInterface } from '@ionic-native/network-interface';
import { Network } from '@ionic-native/network';

import { IonicStorageModule } from '@ionic/storage';
import { FormularioComponent } from '../pages/formulario/formulario';
import { EqualValidator } from './validatorpwd.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyPage,
    ItunesPage,
    FormularioComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyPage,
    ItunesPage,
    FormularioComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkInterface,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
