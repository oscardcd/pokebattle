import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { response } from 'express';
import { Pokemons } from '../models/pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}${name}`);
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemons>(this.apiUrl).pipe(
      map((response) => response.results || [])
    );
  }
}
