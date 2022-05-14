import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  houseId;

  services = [];

  searchTerm: string;

  constructor(public router: Router, public api: ApiCallerService) {
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');

    var response = this.api.sendGetRequestWithAuth("/auth/house/"+this.houseId+"/service/get")
          response.subscribe(data => {
            console.log(data['payload']);
            for(let i=0;i<data['payload'].length;i++){
              this.services.push(data['payload'][i]);
            }
            console.log(this.services);
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })
  }

  ngOnInit() { }

  openWhatsApp() {
    alert("Whatsapp");
  }

  callService() {
    alert("Звонок");
  }

  removeService(key) {
    console.log(key);
    this.services.splice(key,1);
  }

  addService() {

  }

}
