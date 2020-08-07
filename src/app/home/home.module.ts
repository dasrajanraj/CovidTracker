import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FilterPipe } from '../Pipe/filter.pipe';
import { CovidDetailsComponent } from '../components/covid-details/covid-details.component';
import { TimelineComponent } from '../components/timeline/timeline.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,FilterPipe,CovidDetailsComponent, TimelineComponent]
})
export class HomePageModule {}
