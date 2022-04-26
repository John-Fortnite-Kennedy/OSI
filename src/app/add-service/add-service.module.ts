import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServicePageRoutingModule } from './add-service-routing.module';

import { AddServicePage } from './add-service.page';

//import { NgxMaskIonicModule } from 'ngx-mask-ionic'
import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddServicePageRoutingModule,
    SimpleMaskModule
    //NgxMaskIonicModule.forRoot()
  ],
  declarations: [AddServicePage]
})
export class AddServicePageModule {}
