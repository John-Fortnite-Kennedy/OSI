import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
// import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.page.html',
  styleUrls: ['./code-confirmation.page.scss'],
})
export class CodeConfirmationPage implements OnInit {

  keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0]
  code = [null, null, null, null]
  current = 0

  constructor() {}

  ngOnInit() {
  }

  setVal(val) {
    if(val!=null){
      this.code[this.current] = val
      if(this.current<3){
        this.current++
      }
    }
  }

  back(){
    this.code[this.current] = null
    if(this.current>0){
      this.current--
    }
  }
}
