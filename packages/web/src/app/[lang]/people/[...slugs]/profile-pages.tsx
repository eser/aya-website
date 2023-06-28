// import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { type PeopleGetComposition } from "types/src/people-get-result.ts";

import { type Language } from "@/shared/i18n/languages.ts";
import { SidebarNav } from "./sidebar-nav.tsx";

interface ProfilePagesProps {
  lang: Language;
  item: PeopleGetComposition;
  pageSlug?: string;
}

const INDEX_PAGE_SLUG = "index";

const ProfilePages = (props: ProfilePagesProps) => {
  const activePage = props.pageSlug ?? INDEX_PAGE_SLUG;

  const sidebarNavItems = props.item.pages.map(
    (page) => {
      let href = `/${props.lang}/people/${props.item.profile.slug}/`;

      if (page.slug !== INDEX_PAGE_SLUG) {
        href += `${page.slug}/`;
      }

      return {
        href: href,
        title: page.title,
      };
    },
  );

  const activePageContent = props.item.pages.find(
    (page) => page.slug === activePage,
  );

  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1">
        <MDXRemote source={activePageContent?.content ?? ""} />
      </div>
    </div>
  );
};

export { ProfilePages };
