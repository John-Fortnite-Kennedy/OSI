import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeConfirmationPageRoutingModule } from './code-confirmation-routing.module';

import { CodeConfirmationPage } from './code-confirmation.page';
// import { NgOtpInputModule } from 'ng-otp-input';
// import { HideKeyboardModule } from 'hide-keyboard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeConfirmationPageRoutingModule,
    // NgOtpInputModule,
    // HideKeyboardModule
  ],
  declarations: [CodeConfirmationPage]
})
export class CodeConfirmationPageModule {}
