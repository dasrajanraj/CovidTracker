import { Component, OnInit } from '@angular/core';
import { RequestService } from '../Service/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private countriesList : [] = []
  filteredCountry:string =''
  private fetch : Observable<[]>;

  constructor( private reqServier : RequestService) {}
  ngOnInit(){
      this.fetch = this.reqServier.onFetch();
      this.fetch.subscribe((data)=>{
        this.countriesList = data      
      })
  }
  
}
