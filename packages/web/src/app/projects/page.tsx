import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
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

// interface ProjectsPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const ProjectsPage = (/* props: ProjectsPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Projeler
          </h1>
          <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Sayfa henüz hazırlık aşamasında.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { metadata, ProjectsPage, ProjectsPage as default };
