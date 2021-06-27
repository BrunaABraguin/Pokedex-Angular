import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
})
export class PokemonModule {}
