"use client";

import * as React from "react";

import { useInputEvent } from "./use-input-event.ts";

export function useSecretCode(secretCode: string[]) {
  const [count, setCount] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  const key = useInputEvent();

  React.useEffect(() => {
    if (key == null) {
      return;
    }

    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    setCount((state) => state + 1);

    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
  }, [key, count, secretCode.length, secretCode[count]]);

  return success;
}

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function useKonamiCode() {
  return useSecretCode(konamiCode);
}
