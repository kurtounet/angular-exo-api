import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {IPokemonList } from '../interfaces/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlApi = 'https://tyradex.tech/api/v1/pokemon';   
  http = inject(HttpClient);
    fetchAll() {

    return this.http.get<IPokemonList[]>(this.urlApi);
  }
}
