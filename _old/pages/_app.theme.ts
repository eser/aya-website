import { type MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "light",

  fontFamily:
    "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace:
    "Monaco, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",

  headings: {
    fontFamily: "Bree Serif, serif",

    sizes: {
      h1: { fontSize: "2.1rem", fontWeight: 500, lineHeight: "3.5rem" },
      h2: { fontSize: "2rem", fontWeight: 400, lineHeight: "3rem" },
      h3: { fontSize: "1.8rem", fontWeight: 400, lineHeight: "2.4rem" },
      h4: { fontSize: "1.3rem", fontWeight: 400, lineHeight: "1.9rem" },
      h5: { fontSize: "1.2rem", fontWeight: 400, lineHeight: "1.7rem" },
      h6: { fontSize: "1rem", fontWeight: 400, lineHeight: "1.6rem" },
    },
  },

  spacing: {
    xs: 3,
    sm: 9,
    md: 27,
    lg: 81,
    xl: 243,
  },

  colors: {
    gray: [
      "hsl(0deg 0% 98%)",
      "hsl(0deg 0% 95%)",
      "hsl(0deg 0% 93%)",
      "hsl(0deg 0% 89%)",
      "hsl(0deg 0% 83%)",
      "hsl(0deg 0% 71%)",
      "hsl(0deg 0% 56%)",
      "hsl(0deg 0% 37%)",
      "hsl(0deg 0% 23%)",
      "hsl(0deg 0% 15%)",
    ],
  },

  black: "hsl(0deg 0% 56%)",

  globalStyles: (theme) => ({
    html: {
      fontSize: "20px",
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.white,
      color: theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
      // lineHeight: theme.lineHeight,
    },

    a: {
      color: theme.colorScheme === "dark"
        ? theme.colors.blue[5]
        : theme.colors.blue[7],
      textDecoration: "none",
      transition: "color 100ms ease",

      "&:hover": {
        color: theme.colorScheme === "dark"
          ? theme.colors.blue[6]
          : theme.colors.blue[8],
      },
    },
  }),
};

export { theme };
