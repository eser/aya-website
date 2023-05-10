import { type AppProps } from "next/app";
import ErrorPage from "next/error";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { MantineProvider } from "@mantine/core";
import { defaults } from "@webclient/shared/defaults";
import { AuthContextProvider } from "@webclient/services/auth/mod";
import { auth } from "@webclient/services/auth/index";
import { getLanguage } from "@webclient/shared/i18n";
import { theme } from "./_app.theme";
import "@webclient/shared/globals.css";

auth.init();

// deno-lint-ignore ban-types
type CustomPage<P = {}, IP = P> = NextPage<P, IP>;

type CustomAppProps = AppProps & {
  // deno-lint-ignore no-explicit-any
  Component: CustomPage<any>;
};

const CustomApp = (appProps: CustomAppProps) => {
  const router = useRouter();

  const language = getLanguage(router.query.language);

  if (language === undefined) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <AuthContextProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <DefaultSeo
          titleTemplate={`${defaults.siteName} - %s`}
          defaultTitle={defaults.siteName}
          openGraph={{
            type: "website",
            locale: defaults.locale,
            url: defaults.webSiteUrl,
            site_name: defaults.siteName,
          }}
          twitter={{
            // handle: defaults.creatorTwitterHandle,
            site: defaults.twitterHandle,
            cardType: "summary_large_image",
          }}
        />

        <appProps.Component lang={language} {...appProps.pageProps} />
      </MantineProvider>
    </AuthContextProvider>
  );
};

export {
  CustomApp,
  CustomApp as default,
  type CustomAppProps,
  type CustomPage,
};
