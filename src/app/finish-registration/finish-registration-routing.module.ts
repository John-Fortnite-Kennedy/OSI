import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishRegistrationPage } from './finish-registration.page';

const routes: Routes = [
  {
    path: '',
    component: FinishRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishRegistrationPageRoutingModule {}
