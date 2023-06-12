import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {

    console.log('custom filter pipe', value);

    return value.filter(function(search) {

      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1

    });

  }
}
