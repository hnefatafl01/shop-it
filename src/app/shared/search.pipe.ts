import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: any, args?: any): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
          return el.title.toLowerCase().indexOf(input) > -1;
      });
  }
  return value;
  }

}
