import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinRequestsPageRoutingModule } from './join-requests-routing.module';

import { JoinRequestsPage } from './join-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinRequestsPageRoutingModule
  ],
  declarations: [JoinRequestsPage]
})
export class JoinRequestsPageModule {}
