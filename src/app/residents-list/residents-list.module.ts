import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentsListPageRoutingModule } from './residents-list-routing.module';

import { ResidentsListPage } from './residents-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentsListPageRoutingModule
  ],
  declarations: [ResidentsListPage]
})
export class ResidentsListPageModule {}
