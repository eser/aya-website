import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { OrganizationList } from "./organization-list.tsx";
import { IndividualList } from "./individual-list.tsx";
import { VenueList } from "./venue-list.tsx";

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

// interface ElementsPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const ElementsPage = (/* props: ElementsPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container">
        <h1>Bileşenler</h1>

        <h2>Organizasyonlar</h2>
        <div className="max-w-[980px]">
          <OrganizationList />
        </div>

        <h2>Kişiler</h2>
        <div className="max-w-[980px]">
          <IndividualList />
        </div>

        <h2>Merkezler</h2>
        <div className="max-w-[980px]">
          <VenueList />
        </div>
      </section>
    </Layout>
  );
};

export { ElementsPage, ElementsPage as default, metadata };
