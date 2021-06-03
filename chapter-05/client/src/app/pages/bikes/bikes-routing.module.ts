import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
  {
    path: 'bikes',
    children: [
      {
        path: '', component: BikeListComponent
      },
      {
        path: ':id', component: BikeDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
