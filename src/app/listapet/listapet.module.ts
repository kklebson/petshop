import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapetPageRoutingModule } from './listapet-routing.module';

import { ListapetPage } from './listapet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapetPageRoutingModule
  ],
  declarations: [ListapetPage]
})
export class ListapetPageModule {}
