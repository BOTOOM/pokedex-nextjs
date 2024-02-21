import { getPokemonList } from "@/lib";
import BadgeType from "./badgeType";
import Image from "next/image";
import PaginationButtons from "./pagination";

export default async function Table() {
  const pokemonList = await getPokemonList("pik");
  console.log(
    pokemonList
  );
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
            {pokemonList.pokemon_v2_pokemon.map((pokemon: any) => {
              return (
                <tr
                  key={`poke-id-${pokemon.id}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                    {pokemon.pokemon_v2_pokemontypes.map((types: any) => {
                      return (
                        <BadgeType
                          key={`poke-id-${pokemon.id}-type-${types.pokemon_v2_type.name}`}
                          typeName={types.pokemon_v2_type.name}
                        />
                      );
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
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
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {pokemonList.pokemon_v2_pokemon_aggregate.aggregate.count}
            </span>
          </span>
          <PaginationButtons totals={pokemonList.pokemon_v2_pokemon_aggregate.aggregate.count} />
        </nav>
      </div>
    </>
  );
}
