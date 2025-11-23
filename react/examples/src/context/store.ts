import { createContext } from "react";

const initialState = {
  first: "Aayla",
  last: "Secura",
};

export const context = createContext<typeof initialState>(initialState);

export type UserState = typeof initialState;
