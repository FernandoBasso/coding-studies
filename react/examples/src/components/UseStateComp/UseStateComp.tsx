import { useState, type JSX } from "react";

function inc(xs: Array<number>): Array<number> {
  return [...xs, xs.length + 1];
}

export function UseStateComp(): JSX.Element {
  const [nums, numsSet] = useState<Array<number>>([]);
  const [name, nameSet] = useState<string | null>(null);

  return (
    <div>
      <section>
        <h2>Counter</h2>
        <button
          onClick={() => numsSet(inc)}
        >
          Add another number
        </button>
        <p>{JSON.stringify(nums)}</p>
      </section>

      <section>
        <h2>Name</h2>
        <button onClick={() => nameSet("Yoda")}>Set jedi name</button>
        <p>{JSON.stringify(name)}</p>
      </section>
    </div>
  );
}
