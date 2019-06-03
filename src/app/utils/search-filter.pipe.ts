import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(searchVal: string = '', args?: any): any {
    let result: Array<any> = [];
    function searchValInObject(val: any): any {
      /**
       * If val is a string, compare and return
       * If val is an object, recurse for each property
       * If val is an array, recure for each property
       * If val is a number, compare and return
       *
       */
      if (typeof val === 'string' || typeof val === 'number') {
        if (searchVal && val.toString().toLowerCase().includes(searchVal.toLowerCase().trim())) {
          return true;
        }
      } else if (typeof val === 'object' || Array.isArray(val)) {
        for (const i in val) {
          if (val.hasOwnProperty(i) && searchValInObject(val[i])) {
            result.push(val);
            return result;
          }
        }
      }
      return false;
    }
    return searchValInObject(args);
  }
}
