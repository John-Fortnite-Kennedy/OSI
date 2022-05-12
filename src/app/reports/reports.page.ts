import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      title: "Финансовый отчет за Декабрь 2021",
      date: "01 января 2022"
    },
    { 
      title: "Финансовый отчет за Ноябрь 2021",
      date: "05 декабрь 2021"
    }
  ]

  constructor(private router: Router, private modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ReportPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  ngOnInit() { 

  }



  showReport() {
    //this.router.navigate(['/report'])
  }

}
