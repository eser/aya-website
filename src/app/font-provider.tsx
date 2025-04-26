"use client";

import { Bree_Serif, Open_Sans } from "next/font/google";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "block", // "swap",
});

const fontSerif = Bree_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "block", // "swap",
  weight: "400",
});

// const fontMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   display: "swap",
// });

const FontProvider = () => {
  return (
    <style jsx global>
      {`
      :root {
        --font-sans: ${fontSans.style.fontFamily};
        --font-serif: ${fontSerif.style.fontFamily};
      }
    `}
    </style>
  );
};

export { FontProvider };
