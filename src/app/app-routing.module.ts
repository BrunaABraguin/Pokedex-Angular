import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: ':id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
