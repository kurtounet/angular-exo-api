import { Component } from '@angular/core';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export const motsInterdits = (control: AbstractControl): ValidationErrors | null => {
  const mots = ["lol", "lala", "lili"]; 
  return mots.includes(control.value) ? {motsInterdit: "Mots interdit"} : null;
}
export const caraInterdits = (control: AbstractControl): ValidationErrors | null => {
  const mots = ["lol", "lala", "lili"]; 
  return mots.includes(control.value) ? {caraInterdits: "le caractère est interdit"} : null;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
