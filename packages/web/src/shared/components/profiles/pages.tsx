import {
  type ProfileGetComposition,
  type ProfilePage,
} from "shared/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { cn } from "@/shared/lib/cn.ts";
import { mdx } from "@/shared/lib/mdx.ts";

import { components } from "./widgets/mod.ts";
import { SidebarNav } from "./sidebar-nav.tsx";

import styles from "./pages.module.scss";

const PAGE_SLUG_INDEX = "index";
const PAGE_SLUG_STORIES = "stories";
const PAGE_SLUG_MEMBERS = "members";

const getOrder = (profile: ProfilePage) => {
  switch (profile.slug) {
    case PAGE_SLUG_INDEX:
      return -3;
    case PAGE_SLUG_STORIES:
      return -2;
    case PAGE_SLUG_MEMBERS:
      return -1;
    default:
      return profile.order;
  }
};

const sortFn = (a: ProfilePage, b: ProfilePage) => {
  const aOrder = getOrder(a);
  const bOrder = getOrder(b);

  if (aOrder < bOrder) {
    return -1;
  }

  if (aOrder > bOrder) {
    return 1;
  }

  return 0;
};

// Component: PageList
interface PageListProps {
  prefix: string;
  activePageSlug: string;
  item: ProfileGetComposition;
}

const PageList = (props: PageListProps) => {
  const sorted = props.item.pages?.slice(0) ?? [];

  if (props.item.profile.showStories) {
    sorted.push({
      slug: PAGE_SLUG_STORIES,
      title: "Güncellemeler",
    });
  }

  if (props.item.profile.showMembers) {
    sorted.push({
      slug: PAGE_SLUG_MEMBERS,
      title: "Üyeler",
    });
  }

  sorted.sort(sortFn);

  const sidebarNavItems = sorted.map(
    (page) => {
      let href = props.prefix;

      if (page.slug !== PAGE_SLUG_INDEX) {
        href += `${page.slug}/`;
      }

      return {
        href: href,
        title: page.title,
        isActive: page.slug === props.activePageSlug,
      };
    },
  );

  return <SidebarNav items={sidebarNavItems} />;
};

// Component: PageContent
interface PageContentProps {
  item: ProfileGetComposition;
  activePageSlug: string;
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
          activePageSlug={props.activePageSlug}
          item={props.item}
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
  const activePageSlug = props.pageSlug ?? PAGE_SLUG_INDEX;

  let activePageContent;

  if (activePageSlug === PAGE_SLUG_STORIES) {
    activePageContent = "Güncellemeler sayfası henüz hazırlık aşamasında.";
  } else if (activePageSlug === PAGE_SLUG_MEMBERS) {
    activePageContent = "Üyeler sayfası henüz hazırlık aşamasında.";
  } else {
    const activePage = props.item.pages?.find(
      (page) => page.slug === activePageSlug,
    );

    activePageContent = activePage?.content ??
      "Bu sayfa henüz hazırlık aşamasında.";
  }

  const mdxSource = await mdx(
    activePageContent,
    components,
  );

  return (
    <PageContent
      item={props.item}
      activePageSlug={activePageSlug}
      source={mdxSource}
    />
  );
};

export { ProfilePages };
