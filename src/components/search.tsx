"use client";

import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput(typeName: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const optionSearchParams = new URLSearchParams(searchParams.toString());
  const [searchValue, setSearchValue] = useState(
    optionSearchParams.get("search") || ""
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Obtener el valor del campo de texto
    const inputValue = searchValue.trim();

    // Validar si el campo está vacío
    if (inputValue === "") {
      console.log("Campo de búsqueda vacío. Por favor, ingresa un valor.");
      // Puedes agregar aquí la lógica adicional para manejar el campo vacío, como mostrar un mensaje de error.
      return;
    }

    // Lógica de búsqueda o cualquier otra acción que desees realizar con el valor no vacío
    optionSearchParams.set("search", inputValue);
    const optionUrl = createUrl(pathname, optionSearchParams);
    console.log(
      "Search button clicked! Valor de búsqueda:",
      inputValue,
      optionUrl
    );
    router.replace(optionUrl, { scroll: false });
    // Puedes agregar aquí la lógica específica que necesitas para tu aplicación
  };

  return (
    <form className="flex items-center max-w-sm mx-auto p-2">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search pokemon by name..."
          required
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <button
        type="button" // Cambiado de 'submit' a 'button' para evitar que el formulario se envíe automáticamente
        className={`p-2.5 ms-2 text-sm font-medium text-white ${
          searchValue.length < 2 ? "bg-neutral-400" : "bg-blue-700"
        } rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        onClick={handleSearch} // Agregado el evento onClick para llamar a handleSearch
        disabled={searchValue.length < 2}
      >
        <svg
          className="w-4 h-4"
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
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
