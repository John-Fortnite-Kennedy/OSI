import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportPage } from '../report/report.page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  reports = [
    { 
      title: "Финансовый отчет за Январь 2022",
      date: "02 февраля 2022"
    },    
    { 
      title: "Финансовый отчет за Январь 2022",
      date: "02 февраля 2022"
    },    
    { 
      title: "Финансовый отчет за Январь 2022",
      date: "02 февраля 2022"
    }
  ]

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: ReportPage,
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
