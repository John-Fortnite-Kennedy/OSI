import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFindPageRoutingModule } from './add-find-routing.module';

import { AddFindPage } from './add-find.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFindPageRoutingModule
  ],
  declarations: [AddFindPage]
})
export class AddFindPageModule {}
