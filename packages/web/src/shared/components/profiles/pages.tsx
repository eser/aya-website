import { type ProfileGetComposition } from "shared/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { cn } from "@/shared/lib/cn.ts";
import { mdx } from "@/shared/lib/mdx.ts";
import { SidebarNav } from "./sidebar-nav.tsx";

import styles from "./pages.module.scss";

interface ProfilePagesProps {
  // lang: Language;
  item: ProfileGetComposition;
  pageSlug?: string;
}

const INDEX_PAGE_SLUG = "index";

const ProfilePages = async (props: ProfilePagesProps) => {
  const activePage = props.pageSlug ?? INDEX_PAGE_SLUG;

  const sidebarNavItems = props.item.pages.map(
    (page) => {
      let href = `/${props.item.profile.slug}/`;

      if (page.slug !== INDEX_PAGE_SLUG) {
        href += `${page.slug}/`;
      }

      return {
        href: href,
        title: page.title,
        isActive: page.slug === activePage,
      };
    },
  );

  const activePageContent = props.item.pages.find(
    (page) => page.slug === activePage,
  );

  let mdxSource;
  if (activePageContent?.content !== undefined) {
    mdxSource = await mdx(activePageContent.content);
  }

  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <article className={cn("flex-1", styles.content)}>
        {mdxSource !== undefined && (
          <>
            {/* {mdxSource.frontmatter.title} */}
            {mdxSource.content}
          </>
        )}
      </article>
    </div>
  );
};

export { ProfilePages };
