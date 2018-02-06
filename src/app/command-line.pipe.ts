import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'commandLine',
  pure: false
})
export class CommandLinePipe implements PipeTransform {

  transform(value: string[]): string {
    let result= '';
    value.forEach(element => {
      result = result + ' => ' + element ;
    });
    return result;
  }

}
