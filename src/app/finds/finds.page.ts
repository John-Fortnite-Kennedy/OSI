import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallerService } from '../api-caller.service';
import { FindPage } from '../find/find.page';

@Component({
  selector: 'app-finds',
  templateUrl: './finds.page.html',
  styleUrls: ['./finds.page.scss'],
})
export class FindsPage implements OnInit {

  houseId;

  finds = []

  constructor(public api: ApiCallerService, private modalController: ModalController) { 
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');

    var response = this.api.sendGetRequestWithAuth("/auth/house/"+this.houseId+"/find/get")
          response.subscribe(data => {
            console.log(data['payload']);
            for(let i=0;i<data['payload'].length;i++){
              this.finds.push(data['payload'][i]);
            }
            console.log(this.finds);
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })
  }

  ngOnInit() { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: FindPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': tmp.name,
        'description':  tmp.description,
        'createdTime':  tmp.date,
        'path': tmp.file.path
      },
      initialBreakpoint: 0.92,
    breakpoints: [0, 0.92, 1] 
    });
    return await modal.present();
  }

}
