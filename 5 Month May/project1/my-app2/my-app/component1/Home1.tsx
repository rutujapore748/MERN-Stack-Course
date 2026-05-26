"use client";

import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

export default function Home1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}


