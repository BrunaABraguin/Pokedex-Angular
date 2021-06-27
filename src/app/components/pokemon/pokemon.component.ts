import { PokemonService } from './../../shared/services/pokemon.service';
import { Pokemon } from './../../shared/models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonStats();
  }

  getPokemonStats(): void {
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');

      this.pokemonService.getPokemon(id).subscribe((data) => {
        this.pokemon = data;
      });
    });
  }
}
