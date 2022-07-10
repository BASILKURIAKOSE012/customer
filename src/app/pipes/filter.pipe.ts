import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,searchText:string) {
    if(value.length === 0){
      return value;
    }
    const employees =[];
    for(const emp of value){
      if(emp['firstName'] === searchText){
        employees.push(emp);
      }
    }
    return employees;
  }

}
