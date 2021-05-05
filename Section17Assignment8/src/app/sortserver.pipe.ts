import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortserver',
  pure:false
})
export class SortserverPipe implements PipeTransform {

  transform(value: any): any {
    let sorted: string[];
    if (value.length === 0) {
      return value;
    }
    return value.sort((a,b)=>(a.name > b.name)?1:-1);
  }

}
