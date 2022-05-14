import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-apartmentdetails',
  templateUrl: './apartmentdetails.page.html',
  styleUrls: ['./apartmentdetails.page.scss'],
})
export class ApartmentdetailsPage implements OnInit {

  flat;
  block;

  @Input() houseId: string;

  constructor(public router: Router, private modalController: ModalController, public api: ApiCallerService) { 
    this.api.myjwt =  sessionStorage.getItem('token');
  }

  send(){
    var data = {
      "houseId":this.houseId,
      "block":this.block,
      "flat":this.flat
    }
    var response = this.api.sendPostRequestWithAuth(data,"/auth/house/"+this.houseId+"/join")
    response.subscribe(data => {
      console.log(data['payload']);
      sessionStorage.setItem('joinid', data['payload']);
      this.modalController.dismiss();
      this.router.navigateByUrl('/wait');
    }, error => {
        // Add if login and password is incorrect.
        this.api.errorHandler(error.status);
    })
  }

  ngOnInit() {
    console.log(this.houseId);
  }

}
