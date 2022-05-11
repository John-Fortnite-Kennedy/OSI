import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsiJoinPage } from './osi-join.page';

const routes: Routes = [
  {
    path: '',
    component: OsiJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsiJoinPageRoutingModule {}
