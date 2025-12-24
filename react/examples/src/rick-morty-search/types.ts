type APIInfo = {
  /**
   * The length of the response.
   */
  count: number;

  /**
   * The number of pages.
   */
  pages: number;

  /**
   * The URL to the previous page, if it exists.
   */
  prev: string | null;

  /**
   * The URL to the next page, if it exists.
   */
  next: string | null;
}

type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
};

type APIResults = {
  results: Array<APICharacter>;
};

type FetchStatus = "iddle" | "loading" | "success" | "error";

export type {
  APIInfo,
  APICharacter,
  APIResults,
  FetchStatus,
};
