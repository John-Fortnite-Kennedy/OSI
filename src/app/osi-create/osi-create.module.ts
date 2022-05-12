import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsiCreatePageRoutingModule } from './osi-create-routing.module';

import { OsiCreatePage } from './osi-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsiCreatePageRoutingModule
  ],
  declarations: [OsiCreatePage]
})
export class OsiCreatePageModule {}
