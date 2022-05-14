import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-osi-create',
  templateUrl: './osi-create.page.html',
  styleUrls: ['./osi-create.page.scss'],
})
export class OsiCreatePage implements OnInit {

  locations = [];

  constructor(public api: ApiCallerService) {
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
  }

  ngOnInit() { }

}
