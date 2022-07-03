import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallerService } from '../api-caller.service';
import { VotePage } from '../vote/vote.page';


@Component({
  selector: 'app-votes',
  templateUrl: './votes.page.html',
  styleUrls: ['./votes.page.scss'],
})
export class VotesPage implements OnInit {
  houseId;
  votes = [];

  constructor(public api: ApiCallerService, private modalController: ModalController) {
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');
    console.log(this.houseId);
    //console.log(sessionStorage.getItem('houseId'));
    
    var response = this.api.sendGetRequestWithAuth("/auth/house/"+this.houseId+"/vote/get")
    response.subscribe(data => {
      console.log(data['payload']);
      for(let i=0;i<data['payload'].length;i++){
        this.votes.push(data['payload'][i]);
      }
      
      
    }, error => {
      // Add if login and password is incorrect.
      this.api.errorHandler(error.status);
    })
    console.log(this.votes);
  }

  async presentModal(tmp) {
    const modal = await this.modalController.create({
      component: VotePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': tmp.name,
        'description':  tmp.description,
        'createdTime':  tmp.createdTime,
        'yesCount':  tmp.yesCount,
        'noCount':  tmp.noCount,
      },
      initialBreakpoint: 0.92,
    breakpoints: [0, 0.92, 1] 
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
