import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let arr:string[];
    let retStr:string;
    arr  = value.split('');
    arr.reverse();
    retStr = arr.join('');
    return retStr
  }

}
