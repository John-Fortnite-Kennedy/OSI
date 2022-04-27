import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRepairPage } from './add-repair.page';

const routes: Routes = [
  {
    path: '',
    component: AddRepairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRepairPageRoutingModule {}
