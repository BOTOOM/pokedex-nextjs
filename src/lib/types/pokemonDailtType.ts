import { PokemonV2Pokemonsprite, PokemonV2Pokemontype } from "./types";

export interface PokemonDetail {
    pokemon_v2_pokemon: PokemonV2PokemonDetail[];
}

export interface PokemonV2PokemonDetail {
    name: string;
    id: number;
    base_experience: number;
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
    pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
    height: number;
    weight: number;
    pokemon_v2_pokemonspecy: PokemonV2PokemonDetailspecy;
}

export interface PokemonV2PokemonDetailspecy {
    is_mythical: boolean;
    is_legendary: boolean;
    pokemon_v2_pokemoncolor: PokemonV2PokemonDetailcolor;
    pokemon_v2_pokemonhabitat: PokemonV2PokemonDetailhabitat | null;
}

export interface PokemonV2PokemonDetailcolor {
    name: string;
}

export interface PokemonV2PokemonDetailhabitat {
    name: string;
}