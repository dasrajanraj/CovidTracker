import { Component, OnInit, Type} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import {Observable } from 'rxjs';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-covid-details',
  templateUrl: './covid-details.component.html',
  styleUrls: ['./covid-details.component.scss'],
})
export class CovidDetailsComponent implements OnInit {
  private countryCode: string ='';
  private info : {} ={};
  private details : {}={};
  
  private infoFetch : Observable<{}> ;
  timeLineComp : Promise<Type<TimelineComponent>>;

  constructor( private route : ActivatedRoute ,
     private reqServier : RequestService,
     ) { }

  ngOnInit() {
    this.countryCode =  this.route.snapshot.params['countrySlug'];
    this.infoFetch =   this.reqServier.onFetchCountry(this.countryCode)
    this.infoFetch.subscribe((data)=>{
      this.info = {...data['info']}
      this.details = data;          
    })
  }

  async LoadTimeline(){
    if(!this.timeLineComp){
      this.timeLineComp = import('../timeline/timeline.component').then(({TimelineComponent})=> TimelineComponent)
    }
  }
}
