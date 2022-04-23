import { Component, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  openSelect() {
    this.selectRef.open()
  }

}
