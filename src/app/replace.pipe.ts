import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replaceCommas'})
export class ReplaceCommasPipe implements PipeTransform {
  transform(value: string): string {
    let newValue = value.replace(/,/g, '<br>');
    return `${newValue}`;
  }
}
