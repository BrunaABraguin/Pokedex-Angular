import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from '../components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonComponent, LoadingComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PokemonListComponent],
})
export class SharedModule {}
