import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallerService } from '../api-caller.service';
import { ReportPage } from '../report/report.page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  houseId;

  reports = [];

  constructor(public api: ApiCallerService, private modalController: ModalController){
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');

    var response = this.api.sendGetRequestWithAuth("/auth/house/"+this.houseId+"/report/get")
          response.subscribe(data => {
            console.log(data['payload']);
            for(let i=0;i<data['payload'].length;i++){
              this.reports.push(data['payload'][i]);
            }
            console.log(this.reports);
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })
  }

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
