import { type JSX, useRef } from "react";

function UseRefFocusInput(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <h2>UseRef Focus Input</h2>

      <input ref={inputRef} type="text"></input>

      <p>
        Click the button to focus the input:
        <button
          onClick={() => {
            if (inputRef !== null && inputRef.current !== null) {
              inputRef.current.focus();
            }
          }}
        >
          Focus the input!
        </button>
      </p>
    </div>
  );
}

export { UseRefFocusInput };

/*

Enable “Highlight updates when components render” in React
Dev Tools (browser extension) config and see that clicking
the button and focusing on the input DOES NOT cause a rerender!

*/
