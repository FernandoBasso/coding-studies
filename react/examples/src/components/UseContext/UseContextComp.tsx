import { useState, useContext, type JSX } from "react";
import {
  context as UserContext,
  type UserState,
} from "../../context/store";

function Profile(): JSX.Element {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Context Jedi</h2>
      <p>
        {user.first}, {user.last}
      </p>
    </div>
  );
}

function nextJedi({ first }: UserState): UserState {
  if (first === "Ahsoka") return { first: "Aayla", last: "Secura" };

  return { first: "Ahsoka", last: "Tano" };
}

export function UseContextComp(): JSX.Element {
  const [user, userSet] = useState<UserState>({
    first: "Ahsoka",
    last: "Thano",
  });

  return (
    <UserContext.Provider value={user}>
      <Profile />
      <button
        onClick={() => {
          userSet(nextJedi(user));
        }}
      >
        Toggle Jedi
      </button>
    </UserContext.Provider>
  );
}
