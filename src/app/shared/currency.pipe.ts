import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.toFixed(2);
    } else {
      return value;
    }
  }

}
