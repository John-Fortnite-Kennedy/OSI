import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnnouncementPage } from '../announcement/announcement.page';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {

  houseId;

  announcements = [];

  constructor(private modalController: ModalController, public api: ApiCallerService) { 
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');

    var response = this.api.sendGetRequestWithAuth("/auth/house/"+this.houseId+"/announcement/get")
          response.subscribe(data => {
            console.log(data['payload']); 
            for(let i=0;i<data['payload'].length;i++){
              this.announcements.push(data['payload'][i]);
            }
          }, error => {
              // Add if login and password is incorrect.
              this.api.errorHandler(error.status);
          })
  }
  
  ngOnInit() { }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: AnnouncementPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': tmp.name,
        'description':  tmp.description,
        'createdTime':  tmp.createdTime
      },
      initialBreakpoint: 0.92,
    breakpoints: [0, 0.92] 
    });
    return await modal.present();
  }
}
