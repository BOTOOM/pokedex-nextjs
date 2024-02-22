import Image from "next/image";

import logo from "@/assets/siteLogo.svg"


export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="site logo" width={30} height={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PokeDex
          </span>
        </a>
        
      </div>
    </nav>
  );
}
