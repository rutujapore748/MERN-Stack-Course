"use client";

import React from "react";
import useToggle from "./useCustomHook";

export default function Example3() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggleIsOn}>Toggle</button>
    </div>
  );
}
