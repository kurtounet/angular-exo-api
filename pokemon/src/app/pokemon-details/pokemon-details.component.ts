import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule,CarrouselComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  images: string[] = [];
  pokemonService = inject(PokemonService);  
  route = inject(ActivatedRoute);

   
  pokemon:IPokemon|undefined;
  ngOnInit() {
    
    this.fetchOnePokemon();
    console.log('tableau',this.images);
        
  }
  fillArrayImages(pokemon: IPokemon){
    if(pokemon.sprites.regular != null){
      this.images.push(pokemon.sprites.regular);
    }  
    if(pokemon.sprites.shiny != null){
      this.images.push(pokemon.sprites.shiny);
    }  
    if(pokemon.sprites.gmax != null){
      if (pokemon.sprites.gmax.images != null){
        this.images.push(...pokemon.sprites.gmax.images);
      }
       
    }    
    
  }
 
  fetchOnePokemon() {
  const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.fetchOne(id).subscribe(data => {
      this.pokemon = data;
      this.fillArrayImages(this.pokemon);
       
       
    });
  }
// goBack() {
//     window.history.back();
//   }
}


