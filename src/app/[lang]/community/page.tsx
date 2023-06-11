import { siteConfig } from "@/shared/config/site.ts";
import { type Language } from "@/shared/i18n.ts";
import { Layout } from "@/shared/components/layout.tsx";

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

interface CommunityPageProps {
  params: {
    lang: Language;
  };
}

const CommunityPage = (props: CommunityPageProps) => {
  const placeholders: Record<string, string> = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center pt-6 pb-8 md:py-10 gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Topluluk
          </h1>
          <p className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Sayfa henüz hazırlık aşamasında.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export { metadata, CommunityPage, CommunityPage as default };
