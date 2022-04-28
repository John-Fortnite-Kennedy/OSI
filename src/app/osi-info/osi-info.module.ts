import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsiInfoPageRoutingModule } from './osi-info-routing.module';

import { OsiInfoPage } from './osi-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsiInfoPageRoutingModule
  ],
  declarations: [OsiInfoPage]
})
export class OsiInfoPageModule {}
