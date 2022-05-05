import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishRegistrationPageRoutingModule } from './finish-registration-routing.module';

import { FinishRegistrationPage } from './finish-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishRegistrationPageRoutingModule
  ],
  declarations: [FinishRegistrationPage]
})
export class FinishRegistrationPageModule {}
