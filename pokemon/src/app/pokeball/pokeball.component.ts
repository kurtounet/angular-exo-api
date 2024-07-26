import { Component, inject } from '@angular/core';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { PokemonService } from '../shared/services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.css'
})
export class PokeballComponent {
  pokemonService = inject(PokemonService);
  
  //bag="/assets/sac-a-dos.webp";
  bag="https://www.cdiscount.com/pdt2/2/4/6/2/700x700/ban3701405800246/rw/sac-a-dos-du-dresseur-pokemon-bandai-sasha-b.jpg";
  //pokeballImage="/assets/pokeball.png";
  pokeballImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png";

  Bag =[];
  arrayPokeballs: IPokemon[]=[];
  Pokeballs=[];
  Pokemons: IPokemon[]=[];
  showinfo:boolean = false;

  isActive:boolean = true;
   isDisabled:boolean = false;
  ngOnInit() { 
    this.getAllPokemon();
  }
  getAllPokemon() {
    this.pokemonService.fetchAll().subscribe(data => {
      this.arrayPokeballs = data.slice(1, 4);
       
      console.log(this.arrayPokeballs);
      
    });
  }

  show(e:any) {
  this.showinfo = !this.showinfo;
  }
  

}
