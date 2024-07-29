import { Component, inject } from '@angular/core';
import { RightScreenComponent } from '../right-screen/right-screen.component';
import { SearchpokemonComponent } from '../searchpokemon/searchpokemon.component';
import { PokemonService } from '../shared/services/pokemon.service';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [RightScreenComponent,SearchpokemonComponent,CommonModule,FormsModule,SearchPipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  pokemonService = inject(PokemonService);

  urlImage="/assets/pokedex.webp";
  
  PokemonsList: IPokemon[]=[];
  search:string ="";

  pokemonSelected: IPokemon | undefined;
  
  ngOnInit() { 
    this.getPokemonsInBag();
  }
  getPokemonsInBag() {
    this.pokemonService.fetchApiAllPokemon().subscribe(data => {
      this.PokemonsList = data;
    });       
            
 }
   


}
