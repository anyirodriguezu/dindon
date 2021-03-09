import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificationPage } from './calification.page';

const routes: Routes = [
  {
    path: '',
    component: CalificationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalificationPageRoutingModule {}
