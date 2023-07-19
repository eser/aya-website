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

// interface AboutPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const AboutPage = (/* props: AboutPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container">
        <h1>
          Hakkında
        </h1>
        <div className="max-w-[980px]">
          <p>
            Açık Yazılım Ağı, temelleri 2015&apos;de{" "}
            <a href="https://github.com/eser">Eser Özvataf</a> tarafından{" "}
            <a href="https://github.com/acikkaynak">github.com/acikkaynak</a>
            {" "}
            adresinde atılmış (
            <a href="https://github.com/eser/acikkaynak-arsiv/commit/183ddec51161b6a353c513bd42afa3b41abe6766">
              ilk commit
            </a>
            ), internet üzerinden örgütlenen bir açık kaynak topluluğu
            organizasyonudur.
          </p>
          <p>
            Geçmişteki çalışmalarımız daha çok yazılım ekosistemine yönelik
            araç, topluluk ve siteler üretmek, bunların tanıtımını ve
            sürdürülebilirliğini sağlamak, açık kaynak bilinçlenmesini sağlamak
            için içerik üretiminde bulunmak olmuş olsa da; bize belirgin bir
            öğrenim ve deneyim kazandırmış, sonraki çalışmalarımıza ışık
            tutmuştur.
          </p>
          <p>
            Türkiye&apos;de Sanayi Bakanlığı girişimleri ile oluşturulan Türkiye
            Açık Kaynak Platformu&apos;nun topluluklar tarafında da destekler
            vererek, üniversiteler ve firmalar ile bir araya gelmiş;
            Türkiye&apos;deki açık kaynak ekosisteminin tüm paydaşları ile zemin
            etüdünü yapma fırsatı bulmuştur. Bu süreç içerisinde “açık kaynak
            rehberi oluşturma”, “kurumlar içi açık kaynak”, “açık kaynak vakfı
            oluşturma” konuları üzerine çalışmalarda bulunarak belirli bir
            literatür oluşturulmasına katkıda bulunmuştur.
          </p>
          <p>
            Şubat 2023&apos;de Kahramanmaraş&apos;ta gerçekleşen ve 10 ili
            etkileyen deprem felaketi sonrasında ise “yazılımcılara ekosistemine
            yönelik araç, topluluk ve siteler üretimi” çalışmalarımızın kapsamı
            ve kitlesi <a href="https://afet.org">afet.org</a>{" "}
            projemiz ile birlikte genişlemiş ve bugünkü organizasyon kimliğine
            kavuşmuştur.
          </p>
          <p>
            Bugün discord sunucumuzda 24,000&apos;i aşkın gönüllü bilişim
            sektörü çalışanı olarak; herhangi bir sosyal sorumluluk gereksinimi
            anında bilgi sistemleri ve mühendislik pratiklerini uygulayarak,
            açık kaynaklı çözümlerle yaşadığımız topluma katkı sağlamak için
            çalışıyoruz.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export { AboutPage, AboutPage as default, metadata };
