import { type JSX } from "react";

type HeaderItemProps = {
  text: string;
};

function HeaderItem({ text }: HeaderItemProps): JSX.Element {
  return <li>{text}</li>;
}

export { type HeaderItemProps, HeaderItem };
