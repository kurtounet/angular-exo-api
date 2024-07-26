import { Component } from '@angular/core';
import { RightScreenComponent } from '../right-screen/right-screen.component';
import { SearchpokemonComponent } from '../searchpokemon/searchpokemon.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [RightScreenComponent,SearchpokemonComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  urlImage="/assets/pokedex.webp";
  Bag=[];
  arrayPokeballs=[];
  Pokeballs=[];


}
