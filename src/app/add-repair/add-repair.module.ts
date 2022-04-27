import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRepairPageRoutingModule } from './add-repair-routing.module';

import { AddRepairPage } from './add-repair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRepairPageRoutingModule
  ],
  declarations: [AddRepairPage]
})
export class AddRepairPageModule {}
