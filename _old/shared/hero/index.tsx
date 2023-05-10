import Link from "next/link";
import Image from "next/image";
import { createStyles, Flex } from "@mantine/core";
import { type Language } from "@webclient/shared/i18n";
import { type CustomPage } from "@webclient/pages/_app.page";
import logoImage from "@webclient/shared/layout/logo.svg";
import backgroundImage from "./background.svg";
import roundOfPeopleImage from "./round-of-people.svg";

interface HeroComponentProps {
  lang: Language;
}

const useStyles = createStyles((theme) => ({
  container: {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundColor: "#F4F4F4",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  inner: {
    // @apply mx-auto container flex flex-col lg:flex-row lg:justify-between p-2 pb-8 lg:p-12 lg:h-[30em] lg:bg-[url('./round-of-people.svg')] bg-contain bg-right bg-no-repeat;
    padding: "2rem",
    paddingBottom: "8rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundImage: `url(${roundOfPeopleImage.src})`,
  },

  content: {
    // @apply flex flex-col justify-center lg:max-w-xl xl:max-w-3xl;
    maxWidth: "38rem",
    maxHeight: "20rem",
    paddingTop: "5rem",

    "& img": {
      // @apply object-contain w-auto;
      objectFit: "contain",
      width: "auto",
    },

    "& p": {
      // @apply text-base leading-relaxed text-justify lg:text-lg xl:text-xl;
      fontSize: "0.9rem",
      textAlign: "justify",
    },
  },
}));

const HeroComponent: CustomPage<HeroComponentProps> = (
  props: HeroComponentProps,
) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <Flex className={classes.content} direction="column" justify="center">
          <Image
            src={logoImage}
            alt="onileri logo"
            width="498"
            height="328"
            priority={true}
          />
          <p>
            Geliştirici ekosistemini her geçen gün daha da iyileştirmek amacıyla
            yola çıkarak bir{" "}
            <Link href="/about/">
              meta-topluluk
            </Link>{" "}
            oluşturduk. 2015&apos;ten bu yana topluluklar, etkinlikler, projeler
            ve içerikler oluşturmak, topluluğu motive etmek, farkındalık
            aşılamak ve engelleri ortadan kaldırmak için çalışıyoruz.
          </p>
        </Flex>
      </div>
    </div>
  );
};

export { HeroComponent, HeroComponent as default };
