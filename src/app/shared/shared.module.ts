import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PokemonListComponent],
})
export class SharedModule {}
