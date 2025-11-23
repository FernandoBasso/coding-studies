import { createContext } from "react";

const initialState = {
  first: "Aayla",
  last: "Secura",
};

export const context = createContext<typeof initialState>(initialState);

export type JediState = typeof initialState;
