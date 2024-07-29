import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {


  transform(values: IPokemon[], terms: string): IPokemon[] {

    // if (!terms) {
    //   return values;
    // }
    return values.filter(value => value.name.fr?.toLowerCase() === terms.toLowerCase());

    // if (values.filter(value => value.name.fr?.toLowerCase() === terms.toLowerCase())) {
    //   return values.filter(value => value.name.fr?.toLowerCase() === terms.toLowerCase());
    //   //  return values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) );;
    // }


  }
}
