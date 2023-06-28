import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapetPage } from './listapet.page';

const routes: Routes = [
  {
    path: '',
    component: ListapetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapetPageRoutingModule {}
