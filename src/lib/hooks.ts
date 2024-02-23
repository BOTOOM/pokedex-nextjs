import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "./utils";
import { useEffect, useState } from "react";
import { ParamsType } from "./types/types";

export function useUpdateURL(initalState: ParamsType[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<ParamsType[]>(initalState);

  const updateCustomState = (params: ParamsType[]) => {
    setParams(params);
  };
  useEffect(() => {
    if (params.length > 0) {
        const optionSearchParams = new URLSearchParams(searchParams.toString());

      params.map((param) => {
        optionSearchParams.set(param.key, param.value);
      });
      const optionUrl = createUrl(pathname, optionSearchParams);
      router.replace(optionUrl, { scroll: false });
    }

  }, [params, pathname]);

  return [params, updateCustomState];
}

export function useGetParamURL(key: string): string {
  const searchParams = useSearchParams();
  const optionSearchParams = new URLSearchParams(searchParams.toString());

  return optionSearchParams.get(key) || "";
}
