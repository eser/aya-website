import { assertEquals } from "jsr:@std/assert";

import { localeMatch } from "./locale-matcher.ts";

Deno.test({
  name: "example test",
  fn() {
    const supportedLocales = ["@(en)?(-*)", "@(tr)?(-*)"];
    const fallbackLocale = "en";

    const locales = ["de", "de-DE", "tr-TR", "tr"];

    const locale = localeMatch(locales, supportedLocales, fallbackLocale);

    assertEquals(locale, "tr-TR");
  },
});

Deno.test({
  name: "example test",
  fn() {
    const supportedLocales = ["@(en)?(-*)", "@(tr)?(-*)"];
    const fallbackLocale = "en";

    const locales = ["de", "de-DE", "tr", "tr-TR"];

    const locale = localeMatch(locales, supportedLocales, fallbackLocale);

    assertEquals(locale, "tr");
  },
});
