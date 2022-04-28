import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.page.html',
  styleUrls: ['./code-confirmation.page.scss'],
})
export class CodeConfirmationPage implements OnInit {

  keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0]
  // @ViewChild(NgOtpInputComponent) inputCode
  inputCode;
  code = [0, 0, 0, 0]
  current = this.code[0]

  constructor(public platform: Platform) {
  }

  ngOnInit() {
  }

  setVal(val) {
  }
}
