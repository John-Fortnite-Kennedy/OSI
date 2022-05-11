import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApartmentdetailsPage } from '../apartmentdetails/apartmentdetails.page';

@Component({
  selector: 'app-osi-join',
  templateUrl: './osi-join.page.html',
  styleUrls: ['./osi-join.page.scss'],
})
export class OsiJoinPage implements OnInit {

  cities = [
    {
      title: "Нур-Султан"
    },
    {
      title: "Алматы"
    },
    {
      title: "Кокшетау"
    }
  ]

  constructor(private modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ApartmentdetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        
      },
      initialBreakpoint: 0.95,
    breakpoints: [0, 0.95, 1] 
    });
    return await modal.present();
  }

  ngOnInit() { }

}
