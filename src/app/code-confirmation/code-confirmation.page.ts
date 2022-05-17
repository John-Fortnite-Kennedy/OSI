import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { ApiCallerService } from '../api-caller.service';
// import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.page.html',
  styleUrls: ['./code-confirmation.page.scss'],
})
export class CodeConfirmationPage implements OnInit {

  keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0];
  code = [null, null, null, null];
  current = 0;
  decent = false;
  verify;
  phone;
  userdata;
  timer = true;

  constructor(public router: Router, public api: ApiCallerService) {
    this.verify  =  sessionStorage.getItem('code');
    this.phone  =  sessionStorage.getItem('phone');
    this.api.myjwt =  sessionStorage.getItem('token');
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.code.toString().replace(/\,/g, ''));
    if(this.code.toString().replace(/\,/g, '') == this.verify){

      var data = {
        "phone": this.phone,
        "lastCode": this.verify
      }
      var response = this.api.sendPostRequest(data, "/common/verify")
      response.subscribe(data => {
        console.log(data['payload']);
        sessionStorage.setItem('token', data['payload']);
        this.finish();
      }, error => {
        this.api.errorHandler(error.status);
      })

      

    } else {
      alert("not true");
    }
  }

  finish(){
    var response = this.api.sendGetRequestWithAuth("/auth/userdata")
          response.subscribe(data => {
            console.log("this");
            console.log(data['payload']);
            this.userdata = data['payload'];
            
            sessionStorage.setItem('user', JSON.stringify(this.userdata));

            if (this.userdata.user.name == "" || this.userdata.user.name == null || this.userdata.user.surname == "" || this.userdata.user.surname == null){
              this.router.navigateByUrl('/finish-registration');
              console.log("нет имени");
            } else if (this.userdata.houses == null){
              this.router.navigateByUrl('/tabs/osi');
              console.log("нет домов");
            } else {
              this.router.navigateByUrl('/tabs/home');
            }
    
          }, error => {
            this.api.errorHandler(error.status);
          })
  }

  again(){
    console.log("again");

    this.timer=true;
    
    var data = {
      "phone": this.phone,
    }
    //console.log(data)
    var response = this.api.sendPostRequest(data, "/common/login")
    response.subscribe(data => {
      //sessionStorage.setItem('manager_access_data', JSON.stringify(data['payload']))
      
      sessionStorage.setItem('code',data['payload']);
      this.verify  =  sessionStorage.getItem('code');
      console.log(data['payload'] + " again");
      //this.router.navigateByUrl('/code-confirmation');
    }, error => {
      this.api.errorHandler(error.status);
    })

    setTimeout(() => 
    {
        this.timer=false;
    },
    120000);
  }

  setVal(val) {
    if(val!=null){
      this.code[this.current] = val;
      if(this.current<3){
        this.current++;
      }
      if(this.code[3]!=null){
        console.log("done");
        this.decent = true;
      }
    }
  }

  back(){
    this.code[this.current] = null;
    if(this.current>0){
      this.current--;
    }
    this.decent = false;
  }
}
