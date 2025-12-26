import { useState } from "react";
import type { APICharacter } from "./types";
import { type UseFetchParams, useFetch } from "./useFetch";
import { FilterStatus } from "./FilterStatus";

import "./styles.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = console.log.bind(console);

function RickMortySearch() {
  const [qStatus, setQStatus] = useState<UseFetchParams["qStatus"]>("");
  const { data: characters, status } = useFetch(qStatus);

  if (status === "loading") return <p>Loading characters....</p>;

  if (status === "error") return <p>Error fetching characters.</p>;

  return (
    <section>
      <h2>Rick & Morty API Search</h2>

      <FilterStatus setQStatus={setQStatus} />

      <ul>
        {characters.map(({ id, name, status }: APICharacter) => {
          return (
            <li key={id}>
              <span className="name">{name}</span>
              <span className="divisor"> | </span>
              <span className="status">{status}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { RickMortySearch };
