import { type JSX, useReducer } from "react";

type CounterState = {
  counter: number;
};

const initialState: CounterState = {
  counter: 42,
};

type ACTION_TYPES =
  | { type: "increment-by"; payload: number }
  | { type: "decrement-by"; payload: number };

function counterReducer(
  state: CounterState,
  action: ACTION_TYPES
): CounterState {
  switch (action.type) {
    case "increment-by":
      return { ...state, counter: state.counter + action.payload };
    case "decrement-by":
      return { ...state, counter: state.counter - action.payload };
    default:
      throw new TypeError("Unknown action type.")
  }
}

function CounterUseReducer(): JSX.Element {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter">
      <h2>Counter Reducer</h2>

      <p>Counter: {state.counter}</p>

      <button
        onClick={() => dispatch({ type: "decrement-by", payload: 3 })}
      >
        Decrement by 3
      </button>

      <span className="divisor"> | </span>

      <button
        onClick={() => dispatch({ type: "increment-by", payload: 3 })}
      >
        Increment by 3
      </button>
    </div>
  );
}

export { CounterUseReducer };
