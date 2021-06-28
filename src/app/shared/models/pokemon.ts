import Ability from './ability';
import Specie from './specie';
import Sprite from './sprite';
import Stat from './stat';
import Type from './type';
export class Pokemon {
  id: number;
  base_experience: number;
  order: number;
  name: string;
  height: number;
  abilities: Ability[];
  species: Specie;
  types: Type[];
  weight: number;
  sprites: Sprite;
  stats: Stat[];

  constructor() {
    this.abilities = [];
    this.types = [];
  }
}
