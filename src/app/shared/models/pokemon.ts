
export class Pokemon {
  id: number;
  order: number;
  name: string;
  height: number;
  abilities: Ability[];
  spices: Specie;
  types: Type[];
  weight: number;
  sprites: Sprite;
  stats: Stat[];

  constructor() {
    this.abilities = [];
    this.types = [];
  }
}



