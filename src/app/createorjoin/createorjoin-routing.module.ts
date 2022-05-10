import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateorjoinPage } from './createorjoin.page';

const routes: Routes = [
  {
    path: '',
    component: CreateorjoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateorjoinPageRoutingModule {}
