import { getPokemonDetailQuery, getPokemonListQuery } from "./queries";
import { PokemonListType } from "./types/types";
import { PokemonDetail } from "./types/pokemonDailtType";

const endpoint = `https://beta.pokeapi.co/graphql/v1beta`;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function pokeApiFetch<T>({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {

    throw {
      error: e,
      query,
    };
  }
}

export async function getPokemonList(
  handle: string,
  limit: number,
  offset: number
): Promise<PokemonListType> {
  const res = await pokeApiFetch<any>({
    query: getPokemonListQuery,
    variables: {
      handle,
      limit,
      offset,
    },
  });

  return res.body.data;
}


export async function getPokemonDetail(
  handle: string,
): Promise<PokemonDetail> {
  if (handle === "0") {
    return {
      pokemon_v2_pokemon: []
    }
  }
  const res = await pokeApiFetch<any>({
    query: getPokemonDetailQuery,
    variables: {
      handle,
    },
  });

  return res.body.data;
}
