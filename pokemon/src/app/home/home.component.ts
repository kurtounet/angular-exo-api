import { Component } from '@angular/core';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
