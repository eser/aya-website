"use client";

import { useEffect } from "react";
import { siteConfig } from "@/shared/config.ts";
import { useKonamiCode } from "@/shared/hooks/use-secret-code.ts";

const EasterEgg = () => {
  const konami = useKonamiCode();

  useEffect(() => {
    if (konami) {
      const targetElements = document.getElementsByClassName("site-name");
      if (targetElements[0] !== undefined) {
        targetElements[0].textContent = siteConfig.fancyName;
      }
    }
  }, [konami]);

  return null;
};

export { EasterEgg };

// siteConfig.fancyName
