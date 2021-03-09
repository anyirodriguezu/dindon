import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalificationPage } from './calification.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CalificationPageRoutingModule } from './calification-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CalificationPageRoutingModule
  ],
  declarations: [CalificationPage]
})
export class Tab1PageModule {}
