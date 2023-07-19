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

// interface CommunityPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const CommunityPage = (/* props: CommunityPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid grid-cols-2 items-start">
        <div>
          <OrganizationList />
          <VenueList />
        </div>
        <div>
          <IndividualList />
        </div>
      </section>
    </Layout>
  );
};

export { CommunityPage, CommunityPage as default, metadata };
