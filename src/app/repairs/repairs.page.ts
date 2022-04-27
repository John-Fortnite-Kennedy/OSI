import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RepairPage } from '../repair/repair.page';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.page.html',
  styleUrls: ['./repairs.page.scss'],
})
export class RepairsPage implements OnInit {

  repairs = [
    {
      title: "Ремонт подъезда 3",
      date: "14:36 31.03.2021"
    },
    {
      title: "Ремонт лестницы у входа",
      date: "14:36 29.03.2021"
    }
  ]

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: RepairPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'title': tmp.title,
        'date':  tmp.date
      }
    });
    return await modal.present();
  }

}
