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

          var response = this.api.sendGetRequestWithAuth("/auth/userdata")
          response.subscribe(data => {
            //sessionStorage.setItem('manager_access_data', JSON.stringify(data['payload']))
            console.log("this");
            console.log(data['payload']);
            this.userdata = data['payload'];
            
            //sessionStorage.setItem('token', data['payload']);

            if (this.userdata.user.name == "" && this.userdata.user.name == null && this.userdata.user.surname == "" && this.userdata.user.surname == null){
              this.router.navigateByUrl('/finish-registration');
            } else if (this.userdata.houses == null){
              this.router.navigateByUrl('/finish-registration');
              console.log("нет домов");
              //this.router.navigateByUrl('/tabs/home');
            } else {
              this.router.navigateByUrl('/tabs/home');
            }
            
          }, error => {
            // Add if login and password is incorrect.
            this.api.errorHandler(error.status);
          })

        //this.router.navigateByUrl('/finish-registration');
      }, error => {
        // Add if login and password is incorrect.
        this.api.errorHandler(error.status);
      })

    } else {
      alert("not true");
    }

    
    //console.log(data)
    


  


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
      // Add if login and password is incorrect.
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
