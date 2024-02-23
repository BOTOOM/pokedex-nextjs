import PokemonDetail from "@/components/pokemonDetail";
import SearchInput from "@/components/search";
import Table from "@/components/table";
import { getPokemonList } from "@/lib";
import { Flowbite } from "flowbite-react";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pokemonList = await getPokemonList(
    (searchParams["search"] as string) || "",
    Number((searchParams["limit"] as string) || "10"),
    Number((searchParams["offset"] as string) || "0")
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Flowbite>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md: col-span-9">
            <div className="bg-gray-100 rounded-md p-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <SearchInput />
                <Table pokemonList={pokemonList}></Table>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="bg-gray-100 rounded-md p-4">
              <PokemonDetail selectedID={Number((searchParams["selectedID"] as string) || "0")}/>
            </div>
          </div>
        </div>

        {/* Modal para dispositivos móviles */}
        {/* {modalOpen && selectedPokemon && (
          <Flowbite.Modal
            size="xl"
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setSelectedPokemon(null);
            }}
          >
            <Flowbite.ModalBody>
              Aquí irán los detalles del Pokémon
            </Flowbite.ModalBody>
          </Flowbite.Modal>
        )} */}
      </Flowbite>
    </main>
  );
}
