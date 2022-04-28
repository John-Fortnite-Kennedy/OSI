import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnnouncementPage } from '../announcement/announcement.page';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {

  announcements = [
    {
      title: "Отключение воды",
      description: "Поне",
      date: "13:36 24.04.2022"
    },
    {
      title: "Тест",
      description: "Тест",
      date: "13:36 24.04.2022"
    },
    {
      title: "Отключение электричества",
      description: "Оне",
      date: "13:36 24.04.2022"
    },

  ];

  constructor(private modalController: ModalController) { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: AnnouncementPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'title': tmp.title,
        'description':  tmp.description,
        'date':  tmp.date
      },
      initialBreakpoint: 0.95,
    breakpoints: [0, 0.95, 1] 
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
