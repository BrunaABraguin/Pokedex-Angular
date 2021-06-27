import { environment } from './../../../environments/environment.prod';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokemonList } from 'src/app/shared/models/pokemon-list';
import { forkJoin, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonImage = environment.pokemonImageURL;
  offset: number;
  isLastPage = false;

  searchParam: FormControl = new FormControl('');
  isSearching: boolean;
  pokemonIDName: number | string;
  searchPokemon = new Pokemon();
  messageError: string;

  constructor(private pokemonService: PokemonService) {
    this.offset = 0;
  }

  ngOnInit(): void {
    this.getPagination(this.offset);
    this.isSearching = false;
  }

  getPagination(offset: number) {
    if (!this.isLastPage) {
      this.pokemonService
        .getPokemons(offset)
        .subscribe((list: PokemonList[]) => {
          if (list.length === 0) {
            this.isLastPage = true;
          }
          if (!this.isLastPage) {
            this.getPokemonDetail(list);
            console.log(list);
          }
        });
    }
  }

  getPokemonDetail(list: PokemonList[]) {
    const arr: Observable<Pokemon>[] = [];
    list.map((value: PokemonList) => {
      arr.push(this.pokemonService.getPokemon(value.name));
    });

    forkJoin([...arr]).subscribe((pokemons: []) => {
      this.pokemons.push(...pokemons);
      this.offset += 9;
      console.log(this.pokemons);
    });
  }

  morePokemons(): void {
    this.getPagination(this.offset);
    console.log(this.offset);
  }

  onSearchPokemon() {
    try {
      this.pokemonIDName = this.searchParam.value.trim().toLowerCase();
      this.pokemonService.getPokemon(this.pokemonIDName).subscribe(
        (data) => ((this.searchPokemon = data), (this.isSearching = true)),
        (error: any) => {
          if (error.status == 404) {
            this.isSearching = false;
            this.messageError = 'Não encontrado';
            console.log('Error 404');
          }
        }
      );
    } catch (error) {
      console.log(error.status);
      if (error.status === 404) {
        console.log('Not found');
      }
    }
  }
}
