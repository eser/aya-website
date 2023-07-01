import { wrapper } from "../_shared/wrapper.ts";
import {
  type Profile,
  // type ProfileGetComposition,
  type ProfileGetResult,
  type ProfileLinkList,
  type ProfilePageList,
} from "@types/profile-get-result.ts";

wrapper(async (req, { supabase }) => {
  const { slug } = await req.json();

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("slug", slug)
    .is("deletedAt", null)
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profile = profileQueryResponse.data as Profile | undefined;

  if (profile === undefined) {
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
        .select("*")
        .eq("profileId", profile.id)
        .is("deletedAt", null)
        .order("order", { ascending: true }),
      /* profile pages query */
      supabase
        .from("ProfilePage")
        .select("*")
        .eq("profileId", profile.id)
        .is("deletedAt", null)
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
});
