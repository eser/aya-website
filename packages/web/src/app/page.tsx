import Link from "next/link";
// import Image from "next/image";
import { mdx } from "@/shared/lib/mdx.ts";

import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";

import { Button } from "@/shared/components/ui/button.tsx";

import { components } from "@/shared/components/profiles/widgets/mod.ts";

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

// interface IndexPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const IndexPage = async (/* props: IndexPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const introText =
    `**açık yazılım ağı** olarak bilişim sektörüne temas eden gönüllü
ve profesyonellere 2015'den bu yana yapmış olduğumuz çalışmalarla bir
çatı sağlamaya çalışıyoruz. Meta-topluluk ismini vermiş olduğumuz bu
çatı altında kişilerin, toplulukların, firmaların, resmi kurumların ve
sivil toplum kuruluşlarının iletişimini ve iş birliğini
kolaylaştırmayı sağlayarak ekosistem oluşmasına öncülük ediyoruz.

Bugüne kadar kişi ve kurumları açık kaynak geliştirmeye motive etmek,
farkındalık oluşturmak ve bu alanda içerik sağlamak vb. alanlarda
katkılarda bulunduk. <Profile slug="afet.org" />,
<Profile slug="gonullu.io" /> vb. örnek topluluk projelerimiz toplumsal
etkiler bıraktı.

Bugün ise bu web sitesi altında kendini **açık yazılım ağı**'nın bir
parçası olarak gören tüm unsurların kendi eforlarını
görselleştirmelerine ve paylaşmalarına olanak sağlamak istiyoruz.`;

  const mdxSource = await mdx(
    introText,
    components,
  );

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center">
        <div className="flex max-w-[980px] flex-col items-start">
          <h1 className="hero">
            Açık Yazılım Ağı <br className="hidden md:inline" />
            Bilişim Meta-Topluluğu
          </h1>
          <article>
            {mdxSource?.content}
          </article>
        </div>
        <div className="flex gap-4">
          <Button variant="safe" size="lg" asChild>
            <Link
              href="/aya/about/"
              rel="noreferrer"
            >
              Hakkında
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export { IndexPage, IndexPage as default, metadata };
