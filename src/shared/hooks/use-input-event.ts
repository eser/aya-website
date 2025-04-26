"use client";

import { useEffect, useState } from "react";

const useInputEvent = () => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => setKey(event.code);
    const keyUpHandler = () => setKey(null);

    global.addEventListener("keydown", keyDownHandler);
    global.addEventListener("keyup", keyUpHandler);

    return () => {
      global.removeEventListener("keydown", keyDownHandler);
      global.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return key;
};

export { useInputEvent };
