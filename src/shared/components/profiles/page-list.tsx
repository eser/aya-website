import {
  type ProfileGetComposition,
  type ProfilePage,
} from "shared/src/profile-get-result.ts";
import { SidebarNav } from "./sidebar-nav.tsx";

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

export { PageList };
