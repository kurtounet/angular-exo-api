import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { IPokemonList } from '../shared/interfaces/pokemon.model';
import { CommonModule } from '@angular/common';

export interface Pokemon {

  name: string;
  pokedex_id: number
}
@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {
  //pokemon: IPokemon;
  pokemonList: IPokemonList[]=[];
  pokemonService = inject(PokemonService)
  ngOnInit(): void {
    this.getAllPokemon();
  }
  getAllPokemon() {
    this.pokemonService.fetchAll().subscribe(data => {
      this.pokemonList = data.slice(1, 10);
      console.log(data);
      //this.pokemons.push({ name: data['fr'], pokedex_id: data['pokedex_id'] });
    })
  }

}
