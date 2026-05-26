"use client";

import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
});

export default function Home2() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <br /><br />

      <Child onClick={handleClick} />
    </div>
  );
}