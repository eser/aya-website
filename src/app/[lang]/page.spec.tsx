import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import IndexPage from "./page.tsx";

test("home", () => {
  render(<IndexPage params={{ lang: "tr" }} />);

  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", {
      level: 1,
      name: /açık yazılım ağı bilişim meta-topluluğu/i,
    }),
  )
    .toBeDefined();

  // expect(
  //   main.getByAltText("AYA | Açık Yazılım Ağı"),
  // )
  //   .toBeDefined();

  // const footer = within(screen.getByRole("contentinfo"));
  // const link = within(footer.getByRole("link"));
  // expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
