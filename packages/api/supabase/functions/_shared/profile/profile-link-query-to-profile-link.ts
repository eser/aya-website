import { type ProfileLink } from "@shared/profile-link.ts";
import { type Database } from "@shared/supabase-database-types.ts";

type ProfileLinkTableRow = Database["public"]["Tables"]["ProfileLink"]["Row"];
type ProfileLinkTxTableRow =
  Database["public"]["Tables"]["ProfileLinkTx"]["Row"];

interface ProfileLinkQueryResult extends ProfileLinkTableRow {
  ProfileLinkTx: Array<ProfileLinkTxTableRow>;
}

const profileLinkQueryToProfileLink = (
  source: ProfileLinkQueryResult,
): ProfileLink | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    slug: source.slug,
    title: source.ProfileLinkTx[0]?.titleTx ?? "(untranslated)",
    description: source.ProfileLinkTx[0]?.descriptionTx ?? "(untranslated)",
    uri: source.uri,

    iconSet: source.iconSet,
    iconKey: source.iconKey,
  };
};

export { profileLinkQueryToProfileLink };
