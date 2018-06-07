import { Component } from '@angular/core';

@Component({
  selector: 'page-mipagina',
  templateUrl: 'mipagina.html'
})
export class MyPage {

  private peso : number;
  private estatura : number;
  constructor() {
    this.estatura = 1.89;
    this.peso = 85;
  }
}
