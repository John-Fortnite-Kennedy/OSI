import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsiCreatePage } from './osi-create.page';

const routes: Routes = [
  {
    path: '',
    component: OsiCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsiCreatePageRoutingModule {}
