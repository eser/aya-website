// import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { type PeopleGetComposition } from "types/src/people-get-result.ts";
import { SidebarNav } from "./sidebar-nav.tsx";

interface ProfilePagesProps {
  lang?: string;
  item: PeopleGetComposition;
}

const ProfilePages = (props: ProfilePagesProps) => {
  const sidebarNavItems = props.item.pages.map(
    (page) => {
      let href = `/${props.lang ?? "tr"}/people/${props.item.profile.slug}/`;

      if (page.slug !== "index") {
        href += `${page.slug}/`;
      }

      return {
        href: href,
        title: page.title,
      };
    },
  );

  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1">
        <MDXRemote source={props.item.pages[0]?.content ?? ""} />
      </div>
    </div>
  );
};

export { ProfilePages };
