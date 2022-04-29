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
      description: "24 февраля в 16:00 будет отключена горячая вода в связи с заменой труб. Просим проявить терпение",
      date: "23 февраля 2022"
    },
    {
      title: "Собрание ОСИ",
      description: "13 февраля будет проведено собрание всех жителей дома для решения вопросов связанных с ОСИ. Необходимо быть всем!",
      date: "10 февраля 2022"
    },
    {
      title: "Очистка снега",
      description: "10 января в 12:00 будет производиться чистка снега во дворе. Просим не парковать машины в это время",
      date: "07 февраля 2022"
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
