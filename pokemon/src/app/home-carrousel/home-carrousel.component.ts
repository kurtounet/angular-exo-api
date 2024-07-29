import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { IPokemon } from '../shared/interfaces/pokemon.model';

@Component({
  selector: 'app-home-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './home-carrousel.component.html',
  styleUrl: './home-carrousel.component.css'
})
export class HomeCarrouselComponent {
  images: string[]=[
  'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png',
  'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/regular.png',
  'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/regular.png'
];
   pokemonList: IPokemon[]=[];
  pokemonService = inject(PokemonService)
  ngOnInit(): void {
    this.getAllPokemon();
  }
  getAllPokemon() {
    this.pokemonService.fetchApiAllPokemon().subscribe(data => {
      this.pokemonList = data.slice(1, 21);
      console.log(data);      
    })
  }

}
