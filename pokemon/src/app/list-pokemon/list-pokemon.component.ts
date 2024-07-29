import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Pokemon {

  name: string;
  pokedex_id: number
}
@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {
  
  pokemonList: IPokemon[]=[];
  pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.getArrayAllPokemon();
  }
  getArrayAllPokemon() {
    this.pokemonService. fetchApiAllPokemon().subscribe(data => {
      this.pokemonList = data.slice(1, 21);
      console.log(data);      
    })
  }

  removePokemonList(id:number){
    this.pokemonList = this.pokemonList.filter(pokemon => pokemon.pokedex_id !== id);   
  }

}
