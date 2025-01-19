import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipePipe implements PipeTransform {
  
  
  transform(value: string, ...args: string[]): string {
    let result = '';
    for(let i=value.length-1;i>0;--i){
         result += value.charAt(i);
    }
    return result;
  }

}
