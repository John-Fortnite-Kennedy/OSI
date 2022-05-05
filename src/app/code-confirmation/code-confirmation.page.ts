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

  constructor(public router: Router, public api: ApiCallerService) {
    this.verify  =  sessionStorage.getItem('code');
    this.phone  =  sessionStorage.getItem('phone');
    console.log(this.verify);
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.code.toString().replace(/\,/g, ''));
    if(this.code.toString().replace(/\,/g, '') == this.verify){
      //console.log("true");
      //this.router.navigateByUrl('/tabs/home');
      var data = {
        "phone": this.phone,
        "lastCode": this.verify
      }
      //console.log(data)
      var response = this.api.sendPostRequest(data, "/common/verify")
      response.subscribe(data => {
        //sessionStorage.setItem('manager_access_data', JSON.stringify(data['payload']))
        console.log(data['payload']);
        sessionStorage.setItem('token', data['payload']);
        this.router.navigateByUrl('/finish-registration');
      }, error => {
        // Add if login and password is incorrect.
        this.api.errorHandler(error.status);
      })
    } else {
      alert("not true");
    }
  }

  setVal(val) {
    if(val!=null){
      this.code[this.current] = val;
      if(this.current<3){
        this.current++;
      }
      //console.log(this.current);
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
