// import { Alert } from "flowbite-react";
import SearchInput from "@/components/search";
import Table from "@/components/table";
import { getPokemonList } from "@/lib";
import { Flowbite } from "flowbite-react";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams);
  const pokemonList = await getPokemonList(searchParams["search"] as string || "");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Flowbite>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md: col-span-9">
            {/* Lista de Pokémon */}
            {/* lista */}
            <div className="bg-gray-100 rounded-md p-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {/* <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4 bg-white dark:bg-gray-900">
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for users"
                    />
                  </div>
                </div> */}
                <SearchInput/>
                <Table pokemonList={pokemonList}></Table>
              </div>

              {/* Aquí irá la lista de Pokémon */}
            </div>
          </div>
          {/* {selectedPokemon && (
          <div className="col-span-12 md:col-span-3">
            Detalles del Pokémon
            <div className="bg-gray-100 rounded-md p-4">
              Aquí irán los detalles del Pokémon
            </div>
          </div> 
        )} */}

          <div className="col-span-12 md:col-span-3">
            {/* Detalles del Pokémon */}
            <div className="bg-gray-100 rounded-md p-4">
              {/* Aquí irán los detalles del Pokémon */}
              detalle
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
