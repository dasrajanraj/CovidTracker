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
  private total_obj : {} = {}
  
  filteredCountry:string =''
  private fetch : Observable<[]>;
  private fetchTotal : Observable<any>;

  constructor( private reqServier : RequestService) {}
  ngOnInit(){
      this.fetch = this.reqServier.onFetch();
      this.fetch.subscribe((data)=>{       
        this.countriesList = data      
      })     
  }
  
}
