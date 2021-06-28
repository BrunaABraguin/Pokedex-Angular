import { Pokemon } from './../models/pokemon';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
const { pokeApiURL, pokemonEvolution, pokemonSpecies } = environment;
import { map } from 'rxjs/operators';
import EvolutionChain from '../models/evolutionChain';
import Species from '../models/species';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(offset: number, limit: number = 9): Observable<PokemonList[]> {
    return this.httpClient
      .get<PokemonList[]>(
        `${pokeApiURL}pokemon?offset=` + offset + '&limit=' + limit
      )
      .pipe(map((x: any) => x.results));
  }

  getPokemon(pokemon: number | string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${pokeApiURL}pokemon/` + pokemon);
  }

  getEvolutions(url: string): Observable<EvolutionChain> {
    return this.httpClient.get<EvolutionChain>(url);
  }

  getSpecies(name: string): Observable<Species> {
    return this.httpClient.get<Species>(`${pokemonSpecies}` + name);
  }
}
