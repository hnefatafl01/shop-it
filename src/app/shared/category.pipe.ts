import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, selected: string, args?: any): any {
    if (selected) {
      selected = selected.toLowerCase();
      return value.categories.filter((el: any) => {
        return el.toLowerCase().indexOf(selected) > -1;
      });
    }
    return value;
  }

}
