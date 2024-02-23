import { getPokemonDetail } from "@/lib";
import Image from "next/image";
import BadgeType from "./badgeType";
import PokemonDetailList from "./pokemoDetailList";

export default async function PokemonDetail({
  selectedID,
}: {
  selectedID: number;
}) {
  const pokemonDetailList = (await getPokemonDetail(String(selectedID)))
    .pokemon_v2_pokemon[0];
  return (
    <div>
      {selectedID === 0 ? (
        "Selecte a pokemon"
      ) : (
        <div className="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
          <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
            <div className="pb-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <Image
                      className="bg-white dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                      src={
                        pokemonDetailList.pokemon_v2_pokemonsprites[0].sprites
                          ? pokemonDetailList.pokemon_v2_pokemonsprites[0]
                              .sprites
                          : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                      }
                      alt={`${pokemonDetailList.name} image`}
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 mt-20 text-center pl-2 pr-2">
                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                  {pokemonDetailList.name}
                </h3>
                <PokemonDetailList text="ID">
                  {pokemonDetailList.id}
                </PokemonDetailList>
                <PokemonDetailList text="Base Expirience">
                  {pokemonDetailList.base_experience}
                </PokemonDetailList>
                <PokemonDetailList text="Types">
                  {pokemonDetailList.pokemon_v2_pokemontypes.map((types) => {
                    return (
                      <BadgeType
                        key={`poke-id-${pokemonDetailList.id}-type-${types.pokemon_v2_type.name}`}
                        typeName={types.pokemon_v2_type.name}
                      />
                    );
                  })}
                </PokemonDetailList>
                <PokemonDetailList text="Height">
                  {pokemonDetailList.height}
                </PokemonDetailList>
                <PokemonDetailList text="Weight">
                  {pokemonDetailList.height}
                </PokemonDetailList>
                <PokemonDetailList text="Legendary">
                  {pokemonDetailList.pokemon_v2_pokemonspecy.is_legendary
                    ? "Yes"
                    : "No"}
                </PokemonDetailList>
                <PokemonDetailList text="Mythical">
                  {pokemonDetailList.pokemon_v2_pokemonspecy.is_mythical
                    ? "Yes"
                    : "No"}
                </PokemonDetailList>
                <PokemonDetailList text="Habitat">
                  {!!pokemonDetailList.pokemon_v2_pokemonspecy
                    .pokemon_v2_pokemonhabitat
                    ? pokemonDetailList.pokemon_v2_pokemonspecy
                        .pokemon_v2_pokemonhabitat.name
                    : "No especified"}
                </PokemonDetailList>
              </div>

              <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                <div className="absolute flex -space-x-12 rounded-b-2xl">
                  <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                  <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
