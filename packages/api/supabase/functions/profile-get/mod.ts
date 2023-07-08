import { z } from "@zod";
import {
  // type ProfileGetComposition,
  type ProfileGetResult,
  type ProfileLinkList,
  type ProfilePageList,
} from "@types/profile-get-result.ts";

import { profileQueryToProfile } from "../_shared/profile/profile-query-to-profile.ts";
import { type SupabaseClient } from "../_shared/supabase-client.ts";

const profileGet = async (
  supabase: SupabaseClient,
  slug: string,
  lang: string,
) => {
  const slugValidated = await z.string().parseAsync(slug);

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("slug", slugValidated)
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null)
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profile = profileQueryToProfile(profileQueryResponse.data);

  if (profile === null) {
    const result: ProfileGetResult = {
      payload: null,
      error: {
        message: `Profile not found for slug: ${slug}`,
      },
    };

    return result;
  }

  const [profileLinksQueryResponse, profilePagesQueryResponse] = await Promise
    .all([
      /* profile links query */
      supabase
        .from("ProfileLink")
        .select("*, ProfileLinkTx(*)")
        .eq("profileId", profile.id)
        .eq("ProfileLinkTx.languageCode", lang)
        .is("deletedAt", null)
        .is("ProfileLinkTx.deletedAt", null)
        .order("order", { ascending: true }),
      /* profile pages query */
      supabase
        .from("ProfilePage")
        .select("*, ProfilePageTx(*)")
        .eq("profileId", profile.id)
        .eq("ProfilePageTx.languageCode", lang)
        .is("deletedAt", null)
        .is("ProfilePageTx.deletedAt", null)
        .order("order", { ascending: true }),
    ]);

  const links = profileLinksQueryResponse.data as ProfileLinkList;
  const pages = profilePagesQueryResponse.data as ProfilePageList;

  const result: ProfileGetResult = {
    payload: {
      profile: profile,
      links: links,
      pages: pages,
    },
  };

  return result;
};

export { profileGet };
