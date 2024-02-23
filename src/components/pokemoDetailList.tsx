import { getPokemonDetail } from "@/lib";
import Image from "next/image";
import BadgeType from "./badgeType";

export default async function PokemonDetailList({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
      <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">
        {text}: {children}
      </div>
    </div>
  );
}
