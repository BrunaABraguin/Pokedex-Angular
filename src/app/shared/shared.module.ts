import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [PokemonListComponent],
})
export class SharedModule {}
