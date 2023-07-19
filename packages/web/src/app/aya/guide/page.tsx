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

// interface GuidePageProps {
//   params: {
//     // lang: Language;
//   };
// }

const GuidePage = (/* props: GuidePageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center">
        <div className="flex max-w-[980px] flex-col items-start">
          <h1>
            Rehber
          </h1>
          <div className="max-w-[980px] text-lg md:text-xl">
            <h2>Açık Kaynak Yazılım</h2>
            <ul>
              <li><a href="">Açık Kaynak Yazılım Nedir?</a></li>
              <li><a href="">Özgür Yazılım ve Açık Kaynak arasındaki farklar</a></li>
              <li><a href="">Lisanslar</a></li>
            </ul>

            <h2>Açık Kaynak Geliştirme</h2>
            <ul>
              <li><a href="">Sürüm Kontrol Sistemleri</a></li>
              <li><a href="">GitHub Platformu</a></li>
            </ul>

            <h2>Katılım</h2>
            <ul>
              <li><a href="">Açık Kaynak projelerde katılım tanımlaması</a></li>
              <li><a href="">Nasıl katılım sağlarım?</a></li>
              <li><a href="">GitHub üzerinden katılım sağlamak</a></li>
            </ul>

            <h2>Organizasyon</h2>
            <ul>
              <li><a href="">Açık Kaynak projeme katılımcı nasıl bulabilirim?</a></li>
              <li><a href="">Katılım fıkrım var ama ingilizce eksiğim var</a></li>
              <li><a href="">Katılım fikrim var ama teknik eksiğim var</a></li>
              <li><a href="">Katılım fikrim var ama fikir danışmaya ihtiyacım var</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { metadata, GuidePage, GuidePage as default };
