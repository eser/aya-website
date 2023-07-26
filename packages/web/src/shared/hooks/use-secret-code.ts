"use client";

import { useEffect, useState } from "react";
import { useInputEvent } from "./use-input-event.ts";

const useSecretCode = (secretCode: string[]) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
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
  }, [key]);

  return success;
};

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

const useKonamiCode = () => useSecretCode(konamiCode);

export { useKonamiCode, useSecretCode };
