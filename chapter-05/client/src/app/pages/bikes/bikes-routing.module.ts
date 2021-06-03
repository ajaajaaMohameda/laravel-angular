import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

const routes: Routes = [
  {
    path: 'bikes',
    children: [
      {
        path: '', component: BikeListComponent
      },
      {
        path: ':id', component: BikeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
