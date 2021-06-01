import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'beers', pathMatch: 'full'
  },
  {
    path: 'beers', component: BeersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
