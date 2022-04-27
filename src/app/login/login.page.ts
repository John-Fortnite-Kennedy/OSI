import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TermsPage } from '../terms/terms.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phone: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  login(){

  }

  openTerms(){
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TermsPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}
