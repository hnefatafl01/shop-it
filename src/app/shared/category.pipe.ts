import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, selected: string, args?: any): any {
    if (selected) {
      selected = selected.toLowerCase();
      return value.filter((val) => {
        let test = val.categories.indexOf(selected);
        if (test > -1) {
          return val;
        } else {
          return null;
        }
      });
    }
    return value;
  }

}
