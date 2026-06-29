const WORDPRESS_GRAPHQL_URL = import.meta.env.WORDPRESS_GRAPHQL_URL;

type GraphQLResponse<T> = {
  data?: T;
  errors?: {
    message: string;
  }[];
};

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  if (!WORDPRESS_GRAPHQL_URL) {
    throw new Error("WORDPRESS_GRAPHQL_URL is not defined.");
  }

  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed: ${response.status}`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    console.error(json.errors);
    throw new Error(json.errors[0]?.message || "WordPress GraphQL returned errors.");
  }

  if (!json.data) {
    throw new Error("WordPress GraphQL returned no data.");
  }

  return json.data;
}