import { useState, useEffect, type JSX } from "react";

export function UseEffectComp(): JSX.Element {
  const [val, valSet] = useState<number>(1);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      valSet(v => v + 1);
    }, 1e3);

    return function cleanUp() {
      return window.clearInterval(intervalId);
    };
  }, []);

  return <div>{val}</div>;
}
