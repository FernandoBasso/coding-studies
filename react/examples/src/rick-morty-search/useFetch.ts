import { useState, useEffect } from "react";
import type {
  APICharacter,
  FetchStatus,
  APIInfo,
  APIResults,
} from "./types";

const API_URL = "https://rickandmortyapi.com/api";

type UseFetchParams = {
  qStatus: "" | "Alive" | "Dead" | "unknown";
};

function useFetch(qStatus: UseFetchParams["qStatus"]): {
  data: Array<APICharacter>;
  status: FetchStatus;
} {
  const [data, setData] = useState<Array<APICharacter>>([]);
  const [status, setStatus] = useState<FetchStatus>("loading");


  useEffect(() => {
    fetch(`${API_URL}/character?status=${qStatus}`)
      .then(
        (res: Response): Promise<APIInfo & APIResults> => res.json(),
      )
      .then((data: APIInfo & APIResults): void => {
        setData(data.results);
        setStatus("success");
      })
      .catch((err: unknown) => {
        console.error(err);
        setStatus("error");
      });
  }, [qStatus]);

  return { data, status };
}

export { type UseFetchParams, useFetch };
