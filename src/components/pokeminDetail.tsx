"use client";

import { useGetParamURL } from "@/lib/hooks";

export default function PokemonDetail() {
  const selectedID = useGetParamURL("selectedID");

  return <>{selectedID}</>;
}
