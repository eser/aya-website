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

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
