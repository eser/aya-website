import {
  type ProfileGetComposition,
  type ProfilePage,
  type ProfilePageList,
} from "shared/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { cn } from "@/shared/lib/cn.ts";
import { mdx } from "@/shared/lib/mdx.ts";

import { Card, Cards } from "./widgets/cards.tsx";
import { SidebarNav } from "./sidebar-nav.tsx";

import styles from "./pages.module.scss";

const INDEX_PAGE_SLUG = "index";

// Component: PageList
interface PageListProps {
  prefix: string;
  activeSlug: string;
  pages: ProfilePageList;
}

const PageList = (props: PageListProps) => {
  const sidebarNavItems = props.pages.map(
    (page) => {
      let href = props.prefix;

      if (page.slug !== INDEX_PAGE_SLUG) {
        href += `${page.slug}/`;
      }

      return {
        href: href,
        title: page.title,
        isActive: page.slug === props.activeSlug,
      };
    },
  );

  return <SidebarNav items={sidebarNavItems} />;
};

// Component: PageContent
interface PageContentProps {
  item: ProfileGetComposition;
  activePage: ProfilePage;
  source: Awaited<ReturnType<typeof mdx>> | undefined;
}

const PageContentVanilla = (props: PageContentProps) => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <article className={cn("flex-1", styles.content)}>
        {props.source?.content}
      </article>
    </div>
  );
};

const PageContentDefault = (props: PageContentProps) => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <PageList
          prefix={`/${props.item.profile.slug}/`}
          activeSlug={props.activePage.slug}
          pages={props.item.pages ?? []}
        />
      </aside>
      <article className={cn("flex-1", styles.content)}>
        {props.source?.content}
      </article>
    </div>
  );
};

const PageContent = (props: PageContentProps) => {
  const layout = props.source?.frontmatter.layout ?? "default";

  switch (layout) {
    case "vanilla":
      return <PageContentVanilla {...props} />;
    case "default":
    default:
      return <PageContentDefault {...props} />;
  }
};

// Component: ProfilePages
interface ProfilePagesProps {
  // lang: Language;
  item: ProfileGetComposition;
  pageSlug?: string;
}

const ProfilePages = async (props: ProfilePagesProps) => {
  const activePageSlug = props.pageSlug ?? INDEX_PAGE_SLUG;

  const activePage = props.item.pages?.find(
    (page) => page.slug === activePageSlug,
  );

  if (activePage === undefined) {
    return null;
  }

  const mdxSource = await mdx(
    activePage.content,
    {
      Cards: Cards,
      Card: Card,
    },
  );

  return (
    <PageContent item={props.item} activePage={activePage} source={mdxSource} />
  );
};

export { ProfilePages };
