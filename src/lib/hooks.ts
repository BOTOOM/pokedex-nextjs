import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "./utils";
import { useEffect, useState } from "react";
import { ParamsType } from "./types";

export function useUpdateURL(initalState: ParamsType[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<ParamsType[]>(initalState);

  const updateCustomState = (params: ParamsType[]) => {
    console.log("entramos");
    setParams(params);
  };
  useEffect(() => {
    if (params.length > 0) {
        const optionSearchParams = new URLSearchParams(searchParams.toString());

      params.map((param) => {
        optionSearchParams.set(param.key, param.value);
      });
      const optionUrl = createUrl(pathname, optionSearchParams);
      console.log("nueva url", optionUrl);
      router.replace(optionUrl, { scroll: false });
    }

    // return () => {
    //   second
    // }
  }, [params, pathname]);

  //   if (params.length > 0) {
  //     //   optionSearchParams
  // //   const optionUrl = createUrl(pathname, optionSearchParams);
  // //   console.log("nueva url", optionUrl);
  // //   router.replace(optionUrl, { scroll: false });
  //   }
  return [params, updateCustomState];
}

export function useGetParamURL(key: string): string {
  const searchParams = useSearchParams();
  const optionSearchParams = new URLSearchParams(searchParams.toString());

  return optionSearchParams.get(key) || "";
}
