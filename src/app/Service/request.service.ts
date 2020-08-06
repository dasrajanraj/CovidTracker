import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient ) {  }

  onFetch(){
    return this.http.get("https://api.covid19api.com/countries")
    .pipe(map((res:any)=>res))
  }

  onFetchCountry(countryCode){
    return this.http.get(`https://api.thevirustracker.com/free-api?countryTotal=${countryCode}`)
    .pipe(map((res:any)=> res['countrydata'][0]))
  }

}
