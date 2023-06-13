"use client";

import { Inter } from "next/font/google";
// import { JetBrains_Mono } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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
      }
    `}
    </style>
  );
};

export { FontProvider };
