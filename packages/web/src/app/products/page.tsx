import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { ProductList } from "./product-list.tsx";

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

// interface ProductsPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const ProductsPage = (/* props: ProductsPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container">
        <h1>
          Üretimler
        </h1>
        <div className="max-w-[980px] text-lg md:text-xl">
          <ProductList />
        </div>
      </section>
    </Layout>
  );
};

export { metadata, ProductsPage, ProductsPage as default };
