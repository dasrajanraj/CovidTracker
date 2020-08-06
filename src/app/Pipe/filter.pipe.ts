import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterCountry : string): any {
    console.log(filterCountry)
    if(filterCountry === undefined){
      return value;
    }
    return value.filter(x => x.Country.includes(filterCountry))
  }

}
