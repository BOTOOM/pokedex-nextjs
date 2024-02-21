import { getPokemonListQuery } from "./queries";

const endpoint = `https://beta.pokeapi.co/graphql/v1beta`;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function pokeApiFetch<T>({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   'X-Shopify-Storefront-Access-Token': key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    //   if (isShopifyError(e)) {
    //     throw {
    //       cause: e.cause?.toString() || 'unknown',
    //       status: e.status || 500,
    //       message: e.message,
    //       query,
    //     };
    //   }

    throw {
      error: e,
      query,
    };
  }
}

export async function getPokemonList(handle: string): Promise<any> {
  const res = await pokeApiFetch<any>({
    query: getPokemonListQuery,
    // tags: [TAGS.collections],
    variables: {
      handle,
    },
  });
  // return getColecciones(handle);

  return (res.body.data);
}
