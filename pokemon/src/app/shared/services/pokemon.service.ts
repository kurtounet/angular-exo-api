import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {IPokemon } from '../interfaces/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlApi = 'https://tyradex.tech/api/v1/pokemon';   
  http = inject(HttpClient);
  fetchAll() {
    return this.http.get<IPokemon[]>(this.urlApi);
  }
  fetchOne(id:any){
    return this.http.get<IPokemon>(`${this.urlApi}/${id}`);
  }
}
