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
    { title: "Отчет по 13.03.2021" },
    { title: "Отчет по 12.03.2021" },
    { title: "Отчет по 11.03.2021" }
  ]

  constructor(private router: Router, private modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ReportPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  ngOnInit() { }

  showReport() {
    //this.router.navigate(['/report'])
  }

}
