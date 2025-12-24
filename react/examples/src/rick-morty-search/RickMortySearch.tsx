import type { APICharacter } from "./types";
import { useFetch } from "./useFetch";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = console.log.bind(console);

function RickMortySearch() {
  const { data: characters, status } = useFetch();

  if (status === "loading")
    return <p>Loading characters....</p>;

  if (status === "error")
    return <p>Error fetching characters.</p>


  return (
    <ul>
      {
        characters.map(({ id, name, status }: APICharacter) => {
          return (
            <li
              key={id}
            >
              <span className="name">{name}</span>
              <span className="divisor"> | </span>
              <span className="status">{status}</span>
            </li>
          );
        })
      }
    </ul>
  )
}

export { RickMortySearch };
