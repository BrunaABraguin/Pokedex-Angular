import { PokemonService } from './../../shared/services/pokemon.service';
import { Pokemon } from './../../shared/models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import EvolutionChain from 'src/app/shared/models/evolutionChain';
import Species from 'src/app/shared/models/species';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  pokemonImage = environment.pokemonImageURL;
  evolutionChain: EvolutionChain;
  species: Species;

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
        this.pokemonService.getSpecies(this.pokemon.name).subscribe((data) => {
          this.species = data;

          console.log(this.species);

          this.pokemonService
            .getEvolutions(this.species.evolution_chain.url)
            .subscribe((data) => {
              this.evolutionChain = data;

              console.log(this.evolutionChain);
            });
        });
      });
    });
  }
}
