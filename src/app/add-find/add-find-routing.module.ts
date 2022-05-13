import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFindPage } from './add-find.page';

const routes: Routes = [
  {
    path: '',
    component: AddFindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFindPageRoutingModule {}
