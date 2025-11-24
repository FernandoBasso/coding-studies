import { type JSX, useState, useEffect } from "react";

type Jedi = {
  id: number;
  name: string;
  skills: Array<string>;
};

function useFetchData(url: string): [Array<Jedi> | null, boolean] {
  const [data, setData] = useState<Array<Jedi> | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((resp: Response) => resp.json())
      .then((d: Array<Jedi>) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return [data, done];
}

function UseFetchDataComp(): JSX.Element {
  const [data, done] = useFetchData("/jedi.json");

  if (!done || data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map(({ id, name, skills }) => {
        return (
          <section key={id}>
            <h2>{name}</h2>
            <ul>
              {skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export { UseFetchDataComp };
