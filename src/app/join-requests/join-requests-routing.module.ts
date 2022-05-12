import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinRequestsPage } from './join-requests.page';

const routes: Routes = [
  {
    path: '',
    component: JoinRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinRequestsPageRoutingModule {}
