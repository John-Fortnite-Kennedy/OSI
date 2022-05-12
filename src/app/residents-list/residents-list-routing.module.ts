import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsListPage } from './residents-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentsListPageRoutingModule {}
