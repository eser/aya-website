import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card.tsx";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
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

const NewsCard = (props: NewsCardProps) => {
  const { post } = props;

  const dateAdded = new Date(post.dateAdded);
  const dateFormatterOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("tr-TR", dateFormatterOptions);
  const formattedDate = dateFormatter.format(dateAdded);

  return (
    <Card className="mb-5">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
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
        <article>
          <MDXRemote source={post.contentMarkdown} />
        </article>
      </CardContent>
    </Card>
  );
};

// interface NewsPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const NewsPage = async (/* props: NewsPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const data = await hashnodeGetPosts("eser");

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center">
        <div className="flex max-w-[980px] flex-col items-start">
          <h1>
            Haberler
          </h1>
          {data.map((post) => <NewsCard post={post} />)}
        </div>
      </section>
    </Layout>
  );
};

export { NewsPage as default };
