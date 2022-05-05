import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-finish-registration',
  templateUrl: './finish-registration.page.html',
  styleUrls: ['./finish-registration.page.scss'],
})
export class FinishRegistrationPage implements OnInit {

  name;
  surname;
  decent = false;

  constructor(public router: Router, public api: ApiCallerService) { 
    this.api.myjwt =  sessionStorage.getItem('token');
  }

  check(){
    if(this.name!=null && this.name!="" && this.surname!=null && this.surname!=""){
      this.decent = true;
    } else {
      this.decent = false;
    }
    //console.log(this.name + " - " + this.surname);
    
  }

  confirm(){
    var data = {
      "name": this.name,
      "surname": this.surname
    }
    //console.log(data)
    var response = this.api.sendPostRequestWithAuth(data, "/auth/userdata/update")
    response.subscribe(data => {
      //sessionStorage.setItem('manager_access_data', JSON.stringify(data['payload']))
      console.log(data['payload']);
      this.router.navigateByUrl('/tabs/home');
    }, error => {
      // Add if login and password is incorrect.
      this.api.errorHandler(error.status);
    })
  }

  ngOnInit() {
  }

}
