import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PokemonService } from '../shared/services/pokemon.service';
import { IPokemon } from '../shared/interfaces/pokemon.model';
import { HomeCarrouselComponent } from '../home-carrousel/home-carrousel.component';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

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
  imports: [ListPokemonComponent, HomeCarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  // count: number = 0;
  // idInterval!: any;

//  ngOnInit(): void {
//   this.idInterval =  setInterval(() => {   this.count++, 1000 });
//   console.log(this.count);
// }
//  ngOnDestroy(): void {
//  clearInterval(this.idInterval)
//  }
}
