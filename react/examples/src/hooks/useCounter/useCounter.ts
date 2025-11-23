import { useState } from "react";

function useCounter(): { count: number; increment: () => void } {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((n) => n + 1);

  return { count, increment };
}

export { useCounter };
