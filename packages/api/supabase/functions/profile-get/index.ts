import { wrapper } from "../_shared/wrapper.ts";
import {
  type Profile,
  // type ProfileGetComposition,
  type ProfileGetResult,
  ProfilePageList,
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

  const profilePagesQueryResponse = await supabase
    .from("ProfilePage")
    .select("*")
    .eq("profileId", profile.id)
    .is("deletedAt", null)
    .order("order", { ascending: true });

  const pages = profilePagesQueryResponse.data as ProfilePageList;

  const result: ProfileGetResult = {
    payload: {
      profile: profile,
      pages: pages,
    },
  };

  return result;
});
