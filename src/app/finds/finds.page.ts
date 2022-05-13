import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FindPage } from '../find/find.page';

@Component({
  selector: 'app-finds',
  templateUrl: './finds.page.html',
  styleUrls: ['./finds.page.scss'],
})
export class FindsPage implements OnInit {

  finds = [
    { 
      title: "Шапка",
      description: "Была найдена на перилах.",
      date: "02 февраля 2022"
    },
    { 
      title: "Рюкзак",
      description: "Был найдена за магазинам.",
      date: "01 января 2022"
    },
    { 
      title: "Велосипед",
      description: "Был оставлен на дороге перед парковочным местом.",
      date: "05 декабрь 2021"
    }
  ]

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: FindPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'title': tmp.title,
        'description':  tmp.description,
        'date':  tmp.date
      },
      initialBreakpoint: 0.92,
    breakpoints: [0, 0.92, 1] 
    });
    return await modal.present();
  }

}
