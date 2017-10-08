import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform {

  transform(value: any, dir, args?: any): any {
    if (dir === 'asc') {
      return value.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (dir === 'desc') {
      return value.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      return value;
    }
  }

}
