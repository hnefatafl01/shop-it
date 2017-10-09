import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, selected: string, args?: any): any {
    if (selected) {
      selected = selected.toLowerCase();
      return value.filter((val) => {
      //   return val.categories.filter((el: any) => {
      //       return el.toLowerCase().indexOf(selected) > -1;
      //   });
      });
    // console.log(value);
    // console.log(selected);
    }
    return value;
  }

}
