import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchpokemon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchpokemon.component.html',
  styleUrl: './searchpokemon.component.css'
})
export class SearchpokemonComponent {

  pokemonService = inject(PokemonService);

  onSearch(form: NgForm) {
    console.log(form.value);
  }

}
