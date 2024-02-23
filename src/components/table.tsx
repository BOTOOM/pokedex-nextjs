"use client";

import BadgeType from "./badgeType";
import Image from "next/image";
import PaginationButtons from "./pagination";
import {
  ParamsType,
  PokemonListType,
  PokemonV2Pokemon,
  PokemonV2Pokemontype,
} from "@/lib/types/types";
import { useGetParamURL, useUpdateURL } from "@/lib/hooks";

export default function Table({
  pokemonList,
}: {
  pokemonList: PokemonListType;
}) {
  // const selectedID = useGetParamURL("selectedID");

  // const [selectedIDValue, setSelectedIDValue] = useState(selectedID);

  const [urlParams, updateURLParams] = useUpdateURL([]);
  const handleSelect = (id: number) => (event: React.MouseEvent<HTMLTableRowElement>) => {
    // const inputValue = selectedIDValue.trim();
    (updateURLParams as (params: ParamsType[]) => void)([
      { key: "selectedID", value: String(id) },
    ]);

  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Types
              </th>
              <th scope="col" className="px-6 py-3">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemonList.pokemon_v2_pokemon.map((pokemon: PokemonV2Pokemon) => {
              return (
                <tr
                  key={`poke-id-${pokemon.id}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  onClick={handleSelect(pokemon.id)}
                >
                  <td className="px-6 py-4">{pokemon.id}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="w-20 h-20 rounded-full"
                      src={
                        pokemon.pokemon_v2_pokemonsprites[0].sprites
                          ? pokemon.pokemon_v2_pokemonsprites[0].sprites
                          : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                      }
                      alt={`${pokemon.name} image`}
                      width={50}
                      height={50}
                    />

                    <div className="ps-3">
                      <div className="">{pokemon.name}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {pokemon.pokemon_v2_pokemontypes.map(
                      (types: PokemonV2Pokemontype) => {
                        return (
                          <BadgeType
                            key={`poke-id-${pokemon.id}-type-${types.pokemon_v2_type.name}`}
                            typeName={types.pokemon_v2_type.name}
                          />
                        );
                      }
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <PaginationButtons
          totals={pokemonList.pokemon_v2_pokemon_aggregate.aggregate.count}
        />
      </div>
    </>
  );
}
