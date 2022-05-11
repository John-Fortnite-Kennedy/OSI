import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsiJoinPageRoutingModule } from './osi-join-routing.module';

import { OsiJoinPage } from './osi-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsiJoinPageRoutingModule
  ],
  declarations: [OsiJoinPage]
})
export class OsiJoinPageModule {}
