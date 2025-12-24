import { useState, useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api";

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

export { useFetch };
