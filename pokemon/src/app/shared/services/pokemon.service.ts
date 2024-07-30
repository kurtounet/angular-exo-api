import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {IPokemon } from '../interfaces/pokemon.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 // urlApi = 'https://tyradex.tech/api/v1/pokemon';   
  urlApi = environment.urlApi;
  http = inject(HttpClient);

  Bag =[];
  arrayPokeballs: IPokemon[]=[];
  Pokeballs=[];
  Pokemon: IPokemon[]=[];
  showinfo:boolean = false;
  
  arrayAllPokemonList: IPokemon[]=[];
 
  fetchApiAllPokemon() {    
    return this.http.get<IPokemon[]>(this.urlApi);
  }

  fetchOne(id:any){
    return this.http.get<IPokemon>(`${this.urlApi}/${id}`);
  }
  getArrayAllPokemon(){    
    return this.arrayAllPokemonList; 
  }
  addToPokemonsInBag(pokemon:IPokemon){
    this.arrayPokeballs.push(pokemon);
  }
  removePokemonList(id:number){
     
    console.log(id);
    
  }
  // removeToPokeball(pokemon:number){
  //  // return this.http.post<IPokemon>(this.urlApi,pokemon);
  // }
  // removeToPokeball(pokemon:number){
  //  // return this.http.post<IPokemon>(this.urlApi,pokemon);
  // }
}
