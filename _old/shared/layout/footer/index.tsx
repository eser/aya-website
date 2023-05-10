import Image from "next/image";
import Link from "next/link";
import { createStyles, Flex, Text } from "@mantine/core";
import { type Language } from "@webclient/shared/i18n";
import LogoImage from "../logo.svg";
import CcByNcSaImage from "./cc-by-nc-sa.svg";

interface FooterProps {
  lang: Language;
}

const useStyles = createStyles((theme) => ({
  footer: {
    padding: "20px",
    fontSize: theme.fontSizes.sm,
  },

  logo: {
    height: "2rem",
    width: "auto",
  },

  disclaimer: {
    width: "50%",
    textAlign: "center",
  },
}));

const Footer = (props: FooterProps) => {
  const { classes } = useStyles();

  return (
    <Flex direction="column" align="center" gap="sm" className={classes.footer}>
      <Link href="/">
        <Image
          className={classes.logo}
          src={LogoImage}
          alt="onileri logo"
          priority={true}
        />
      </Link>

      <Text className={classes.disclaimer}>
        Site içerisinde gördüğünüz içerikler&nbsp;
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International License
        </a>
        &nbsp;ile lisanslanmıştır.
      </Text>

      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
      >
        <Image
          alt="Creative Commons Attribution-NonCommercial-ShareAlike 4.0"
          src={CcByNcSaImage}
        />
      </a>

      <Flex gap="sm">
        <Link href="/" rel="noopener noreferrer">
          girişimler
        </Link>
        <div />
        <Link href="/about/" rel="noopener noreferrer">
          hakkımızda
        </Link>
        <div />
        <Link href="/guide/" rel="noopener noreferrer">
          rehber
        </Link>
        <div />
        <Link href="/agreements/" rel="noopener noreferrer">
          topluluk sözleşmeleri
        </Link>
        <div />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/10fwd"
        >
          github
        </a>
      </Flex>
    </Flex>
  );
};

export { Footer, Footer as default };
