"use client";

import React, { useState, useEffect } from "react";

export default function Example2() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime(); // set immediately
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null; // nothing rendered on server

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Current Time: {time}</p>
    </div>
  );
}
