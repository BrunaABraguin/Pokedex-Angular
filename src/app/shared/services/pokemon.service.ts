import { Pokemon } from './../models/pokemon';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
const { pokeApiURL } = environment;
import { map, pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(offset: number, limit: number = 9): Observable<PokemonList[]>{
    const param1 = new HttpParams().set('offset', offset);
    const param2 = new HttpParams().set('limit', limit);
    return this.httpClient.get<PokemonList[]>(
      `${pokeApiURL}pokemon{ params: param1 }{ params: param2 }`
    ).pipe(map((x: any) => x.results));
  }

  getPokemon(pokemon: number | string): Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(
      `${pokeApiURL}pokemon/`+ pokemon
    );
  }
}
