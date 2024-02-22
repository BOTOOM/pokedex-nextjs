export const getPokemonListQuery = /* GraphQL */ `
query getPokemonListQuery($handle: String!, $limit: Int!, $offset: Int!) {
  pokemon_v2_pokemon(order_by: {name: asc}, where: {name: {_regex: $handle}}, limit: $limit, offset: $offset) {
    id
    height
    is_default
    name
    pokemon_v2_pokemonsprites {
      sprites(path: "other.home.front_default")
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    weight
  }
  pokemon_v2_pokemon_aggregate(where: {name: {_regex: $handle}}) {
    aggregate {
      count(columns: id)
    }
  }
}
`;