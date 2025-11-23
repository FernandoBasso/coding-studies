import { useState, useContext, type JSX } from "react";
import {
  context as JediContext,
  type JediState,
} from "../../context/store";

function Profile(): JSX.Element {
  const jedi = useContext(JediContext);
  return (
    <div>
      <h2>Context Jedi</h2>
      <p>
        {jedi.first}, {jedi.last}
      </p>
    </div>
  );
}

function nextJedi({ first }: JediState): JediState {
  if (first === "Ahsoka") return { first: "Aayla", last: "Secura" };

  return { first: "Ahsoka", last: "Tano" };
}

export function UseContextComp(): JSX.Element {
  const [jedi, jediSet] = useState<JediState>({
    first: "Ahsoka",
    last: "Thano",
  });

  return (
    <JediContext.Provider value={jedi}>
      <Profile />
      <button
        onClick={() => {
          jediSet(nextJedi(jedi));
        }}
      >
        Toggle Jedi
      </button>
    </JediContext.Provider>
  );
}
