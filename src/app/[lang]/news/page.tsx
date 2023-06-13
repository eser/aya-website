import Image from "next/image";
import { getMDXComponent } from "@/shared/lib/get-mdx-component.ts";

import { siteConfig } from "@/shared/config/site.ts";
import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layout.tsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card.tsx";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio.tsx";

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

interface NewsPost {
  slug: string;
  dateAdded: string;
  coverImage: string;
  title: string;
  brief: string;
  contentMarkdown: string;
}

const hashnodeApiEndpoint = "https://api.hashnode.com/";

const hashnodeGql = async (query: string) => {
  const response = await fetch(hashnodeApiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": authToken,
    },
    body: JSON.stringify({ query }),
  });

  return response.json();
};

const hashnodeGetPosts = async (
  username: string,
): Promise<NewsPost[]> => {
  const query = `{
    user(username: "${username}") {
      publication {
        posts(page: 0) {
         slug
         dateAdded
         coverImage
         title
         brief
         contentMarkdown
        }
      }
    }
  }`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result = await hashnodeGql(query);

  if (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    result?.data?.user?.publication === null ||
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    result?.data?.user?.publication === undefined
  ) {
    return [] as NewsPost[];
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return result.data.user.publication.posts as NewsPost[];
};

interface NewsCardProps {
  post: NewsPost;
}

const NewsCard = async (props: NewsCardProps) => {
  const { post } = props;
  const MDXContent = await getMDXComponent(post.contentMarkdown);

  return (
    <Card className="mb-5">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.dateAdded}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            fill
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <MDXContent />
      </CardContent>
    </Card>
  );
};

interface NewsPageProps {
  params: {
    lang: Language;
  };
}

const NewsPage = async (props: NewsPageProps) => {
  const placeholders: Record<string, string> = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lang: props.params.lang,
  };

  const data = await hashnodeGetPosts("eser");

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center pt-6 pb-8 md:py-10 gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Haberler
          </h1>
          <p className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            {data.map((post) => <NewsCard post={post} />)}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export { metadata, NewsPage, NewsPage as default };
