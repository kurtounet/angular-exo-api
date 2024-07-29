import { Component, Input, input } from '@angular/core';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-screen.component.html',
  styleUrl: './right-screen.component.css'
})
export class RightScreenComponent {
 // @Input() inPokemon: IPokemon;

}
