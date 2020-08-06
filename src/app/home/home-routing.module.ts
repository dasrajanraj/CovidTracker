import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CovidDetailsComponent } from '../components/covid-details/covid-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':countrySlug',
    component : CovidDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
