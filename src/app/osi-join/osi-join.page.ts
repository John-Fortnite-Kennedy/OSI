import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApartmentdetailsPage } from '../apartmentdetails/apartmentdetails.page';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-osi-join',
  templateUrl: './osi-join.page.html',
  styleUrls: ['./osi-join.page.scss'],
})
export class OsiJoinPage implements OnInit {

  locations = [];
  cities = [];

  options = [];

  allow = false;
  city;
  address;
  id;

  houseid;

  constructor(private modalController: ModalController, public api: ApiCallerService) { 
    this.api.myjwt =  sessionStorage.getItem('token');

    var response = this.api.sendGetRequest("/common/locations")
          response.subscribe(data => {
            console.log(data['payload']); 
            for(let i=0;i<data['payload'].length;i++){
              this.locations.push(data['payload'][i]);
            }
          }, error => {
              // Add if login and password is incorrect.
              this.api.errorHandler(error.status);
          })

    response = this.api.sendGetRequestWithAuth("/auth/house/get")
    response.subscribe(data => {
      console.log(data['payload']); 
      for(let i=0;i<data['payload'].length;i++){
        this.cities.push(data['payload'][i]);
      }
    }, error => {
        // Add if login and password is incorrect.
        this.api.errorHandler(error.status);
    })

  }

  chosen(){
    this.allow = true;
    this.options = [];
    for(let i=0;i<this.locations.length;i++){
      // console.log(this.locations[i].city);
      //   console.log(this.city.trim());
      if (this.locations[i].city == this.city.trim()){
        this.id = this.locations[i].id;
        break;
      }
    }
    for(let i=0;i<this.cities.length;i++){
      if (this.cities[i].id == this.id){
        this.options.push(this.cities[i].name);
        this.houseid = this.cities[i].id;
        
        break;
      }
    }

    console.log(this.id);
  }

  async presentModal() {
    //console.log(this.houseid + " Дом");
    
    const modal = await this.modalController.create({
      component: ApartmentdetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        "houseId":this.houseid,
      },
      initialBreakpoint: 0.92,
    breakpoints: [0, 0.92] 
    });
    return await modal.present();
  }

  ngOnInit() { }

}
