import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import IndexPage from "./page.tsx";

test("home", () => {
  render(<IndexPage params={{ lang: "tr" }} />);

  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", {
      level: 1,
      name: /Onİleri Geliştirici Meta-Topluluğu/i,
    }),
  )
    .toBeDefined();

  // const footer = within(screen.getByRole("contentinfo"));
  // const link = within(footer.getByRole("link"));
  // expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
