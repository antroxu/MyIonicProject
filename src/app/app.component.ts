import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { MyPage } from '../pages/mipagina/mipagina';

import { ItunesPage } from '../pages/itunes/itunes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  // make HelloIonicPage the root (or first) page
  //rootPage = HelloIonicPage;
  rootPage = ItunesPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    //this.nav.setRoot(<any>HelloIonicPage);
    //this.openPage(this.pages[0].component);
    

    /*storage.get('primera_pagina').then((pp) => {
      if ((pp = null) || (pp%2 == 0))
      {//Pagina par
        this.nav.setRoot(HelloIonicPage);
        storage.set('primera_pagina', ItunesPage);
      }
      else
      {//Pagina impar
        this.nav.setRoot(ItunesPage);
        storage.set('primera_pagina', HelloIonicPage);      
      };
    });*/


//this.rootPage


    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'My Page', component: MyPage},
      { title: 'itunes', component: ItunesPage},
    ];

    this.openPage(this.pages[0].component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
