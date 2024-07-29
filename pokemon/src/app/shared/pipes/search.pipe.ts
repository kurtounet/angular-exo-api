import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

   
   transform(values: IPokemon[], terms: string):IPokemon[] {     
    
    // if(values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) ).length > 1){
    //   return values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) );
    // }else{
    //  return values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) );;
    // }
          
   return values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) );  
   
  }
}
