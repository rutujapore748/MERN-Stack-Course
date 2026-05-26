"use client";

import { useRef } from "react";

export default function Homec() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
        style={{
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}
