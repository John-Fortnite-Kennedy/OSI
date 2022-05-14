import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.page.html',
  styleUrls: ['./add-announcement.page.scss'],
})
export class AddAnnouncementPage implements OnInit {

  name;
  description;
  createdTime;

  houseId;

  constructor(public api: ApiCallerService, public router: Router) { 
    this.api.myjwt =  sessionStorage.getItem('token');
    this.houseId =  sessionStorage.getItem('houseId');
  }

  ngOnInit() { }

  send(){
    var data = {
      "houseId":+this.houseId,
      "name":this.name,
      "description":this.description
    }
    console.log(data);
    var response = this.api.sendPostRequestWithAuth(data,"/auth/house/"+this.houseId+"/announcement/create")
          response.subscribe(data => {
            console.log(data['payload']);

            this.router.navigateByUrl('/tabs/announcements');
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })
  }

  open() {
    alert('Загрузка изображения');
  }

}
