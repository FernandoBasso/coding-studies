import { useState, useEffect } from "react";

const log = console.log.bind(console);

const API_URL = "https://rickandmortyapi.com/api";

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

function useFetch(): { data: Array<APICharacter>, status: FetchStatus } {
  const [data, setData] = useState<Array<APICharacter>>([]);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    fetch(API_URL + "/character")
      .then((res: Response): Promise<APIInfo & APIResults> => res.json())
      .then((data: APIInfo & APIResults): void => {
        setData(data.results);
        setStatus("success");
      })
      .catch((err: unknown) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  return { data, status };
}

function RickMortySearch() {
  const { data: characters, status } = useFetch();

  if (status === "loading")
    return <p>Loading characters....</p>;

  if (status === "error")
    return <p>Error fetching characters.</p>


  return (
    <ul>
      {
        characters.map((character: APICharacter) => {
          return (
            <li
              key={character.id}
            >
              {character.name}
            </li>
          );
        })
      }
    </ul>
  )
}

export { RickMortySearch };
