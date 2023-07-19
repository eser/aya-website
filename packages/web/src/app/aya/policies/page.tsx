import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
};

// interface PoliciesPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const PoliciesPage = (/* props: PoliciesPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1>
            Kurallar
          </h1>
          <div className="max-w-[980px] text-lg sm:text-xl">
            Sayfa henüz hazırlık aşamasında.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { metadata, PoliciesPage, PoliciesPage as default };
