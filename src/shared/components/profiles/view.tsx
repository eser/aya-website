import type { ProfileGetComposition } from "shared/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { mdx } from "@/shared/lib/mdx.ts";

import { components } from "./widgets/mod.ts";

import { PageList } from "./page-list.tsx";
import { ProfileHeading } from "./heading.tsx";
import { ProfileTemplate } from "./template.tsx";

const PAGE_SLUG_INDEX = "index";
const PAGE_SLUG_STORIES = "stories";
const PAGE_SLUG_MEMBERS = "members";

// Component: ProfileView
interface ProfileViewProps {
  // lang: Language;
  slug: string;
  pathSlugs?: string[];
  item: ProfileGetComposition | null;
}

export const ProfileView = async (props: ProfileViewProps) => {
  if (props.item === null) {
    return (
      <>
        <h1>
          Profile
        </h1>
        <div className="max-w-[980px] text-lg md:text-xl">
          Profile &quot;{props.slug ?? "-"}&quot; not found.
        </div>
      </>
    );
  }

  const activePageSlug = props.pathSlugs?.[0] ?? PAGE_SLUG_INDEX;

  let activePageContent;

  if (activePageSlug === PAGE_SLUG_STORIES) {
    activePageContent = "Güncellemeler sayfası henüz hazırlık aşamasında.";
  } else if (activePageSlug === PAGE_SLUG_MEMBERS) {
    activePageContent = "Üyeler sayfası henüz hazırlık aşamasında.";
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
    <ProfileTemplate
      layout={mdxSource.frontmatter.layout ?? "default"}
      heading={<ProfileHeading item={props.item} />}
      navigation={<PageList
        prefix={`/${props.item.profile.slug}/`}
        activePageSlug={activePageSlug}
        item={props.item}
      />}
    >
      {mdxSource.content}
    </ProfileTemplate>
  );
};
