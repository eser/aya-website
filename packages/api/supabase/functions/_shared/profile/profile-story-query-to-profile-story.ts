import { type ProfileStory } from "@shared/profile-story.ts";
import { type Database } from "@shared/supabase-database-types.ts";

type ProfileStoryTableRow = Database["public"]["Tables"]["ProfileStory"]["Row"];
type ProfileStoryTxTableRow =
  Database["public"]["Tables"]["ProfileStoryTx"]["Row"];

interface ProfileStoryQueryResult extends ProfileStoryTableRow {
  ProfileStoryTx: Array<ProfileStoryTxTableRow>;
}

const profileStoryQueryToProfileStory = (
  source: ProfileStoryQueryResult,
): ProfileStory | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    slug: source.slug,
    category: source.category,
    isFeatured: source.isFeatured,
    publishedAt: source.publishedAt,

    title: source.ProfileStoryTx[0]?.titleTx ?? "(untranslated)",
    content: source.ProfileStoryTx[0]?.contentTx ?? "(untranslated)",
  };
};

export { profileStoryQueryToProfileStory };
