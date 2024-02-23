// export type ShopifyCollectionOperation = {
//   data: {
//     collection: ShopifyCollection;
//   };
//   variables: {
//     handle: string;
//   };
// };

export interface PokemonListType {
    pokemon_v2_pokemon: PokemonV2Pokemon[];
    pokemon_v2_pokemon_aggregate: PokemonV2PokemonAggregate;
}

export interface PokemonV2Pokemon {
    id: number;
    height: number;
    is_default: boolean;
    name: string;
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
    pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
    weight: number;
}

export interface PokemonV2Pokemonsprite {
    sprites?: string;
}

export interface PokemonV2Pokemontype {
    pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Type {
    name: string;
}

export interface PokemonV2PokemonAggregate {
    aggregate: Aggregate;
}

export interface Aggregate {
    count: number;
}

export interface ParamsType {
    key: string;
    value: string;
  }