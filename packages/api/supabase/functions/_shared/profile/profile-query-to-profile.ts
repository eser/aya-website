import { type Profile } from "@shared/profile.ts";
import { type Database } from "@shared/supabase-database-types.ts";

type ProfileTableRow = Database["public"]["Tables"]["Profile"]["Row"];
type ProfileTxTableRow = Database["public"]["Tables"]["ProfileTx"]["Row"];

interface ProfileQueryResult extends ProfileTableRow {
  ProfileTx: Array<ProfileTxTableRow>;
}

const profileQueryToProfile = (source: ProfileQueryResult): Profile | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    type: source.type,
    slug: source.slug,
    title: source.ProfileTx?.[0]?.titleTx ?? "(untranslated)",
    description: source.ProfileTx?.[0]?.descriptionTx ?? "(untranslated)",
    profilePictureUri: source.profilePictureUri,
  };
};

export { profileQueryToProfile };
