import Evolution from './evolution';

export class EvolutionChain {
  chain: {
    evolves_to: Evolution[];
    species: { name: string; url: string };
  };
}

export default EvolutionChain;
