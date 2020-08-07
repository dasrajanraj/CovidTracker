import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  private countryCode: string ='';
  private fetchTimeline : Observable<{}>
  private timeLine : {}[] =[];

  constructor(private route : ActivatedRoute,
    private reqServier : RequestService
    ) { }

  ngOnInit() {
    this.countryCode =  this.route.snapshot.params['countrySlug'];
    this.fetchTimeline = this.reqServier.onFetchCountryTimeline(this.countryCode);
    this.fetchTimeline.subscribe((data)=>{
      console.log(data);
      for(let date in data){
        if(date ==='stat'){
          continue;
        }
        if( data.hasOwnProperty(date)){
          this.timeLine.push({date , ...data[date]})
        }
      }
      this.timeLine.reverse();
      console.log(this.timeLine)
    })

  }



}
