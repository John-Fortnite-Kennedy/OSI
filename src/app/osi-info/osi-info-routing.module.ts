import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsiInfoPage } from './osi-info.page';

const routes: Routes = [
  {
    path: '',
    component: OsiInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsiInfoPageRoutingModule {}
