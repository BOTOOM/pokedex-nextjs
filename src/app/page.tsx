// import { Alert } from "flowbite-react";
import Table from "@/components/table";
import { Flowbite } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Flowbite>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md: col-span-9">
            {/* Lista de Pokémon */}
            {/* lista */}
            <div className="bg-gray-100 rounded-md p-4">
              <Table></Table>
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
