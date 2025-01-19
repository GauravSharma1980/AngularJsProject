import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeChangePipe',
  //pure:  false
})
export class TimeChangePipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return new Date().toLocaleTimeString();
    
  }

}
