import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateorjoinPageRoutingModule } from './createorjoin-routing.module';

import { CreateorjoinPage } from './createorjoin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateorjoinPageRoutingModule
  ],
  declarations: [CreateorjoinPage]
})
export class CreateorjoinPageModule {}
