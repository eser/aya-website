import { type ProfilePage } from "@shared/profile-page.ts";
import { type Database } from "@shared/supabase-database-types.ts";

type ProfilePageTableRow = Database["public"]["Tables"]["ProfilePage"]["Row"];
type ProfilePageTxTableRow =
  Database["public"]["Tables"]["ProfilePageTx"]["Row"];

interface ProfilePageQueryResult extends ProfilePageTableRow {
  ProfilePageTx: Array<ProfilePageTxTableRow>;
}

const profilePageQueryToProfilePage = (
  source: ProfilePageQueryResult,
): ProfilePage | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    slug: source.slug,
    title: source.ProfilePageTx[0]?.titleTx ?? "(untranslated)",
    content: source.ProfilePageTx[0]?.contentTx ?? "(untranslated)",
    order: source.order,
    publishedAt: source.publishedAt,
  };
};

export { profilePageQueryToProfilePage };
