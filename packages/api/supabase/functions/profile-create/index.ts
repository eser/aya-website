import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";
import {
  type Profile,
  // type ProfileGetComposition,
  type ProfileGetResult,
  // type ProfileLinkList,
  // type ProfilePageList,
} from "@types/profile-get-result.ts";

/*

{
  id: ______ (optional, default: create),
  type: [ Product, Organization, Individual ],
  slug: _____,
  title: _____,
  description: ______,
  profilePictureUri: _____,

  links: [
    {
      id: ______ (optional, default: create),
      slug: _____,
      title: ______,
      description: _____,
      uri: ____,
      iconSet: ____,
      iconKey: ____,
      order: ____
    }
  ],

  pages: [
    {
      id: ______ (optional, default: create),
      slug: ____,
      publishedAt: _____ [nullable],
      title: _____,
      content: _____,
      order: ____
    }
  ],

  stories: [
    {
      id: ______ (optional, default: create),
      slug: ____,
      category: [ Status, Announcement, News ],
      isFeatured: _____ [boolean],
      publishedAt: _____ [nullable],
      title: _____,
      content: _____
    }
  ],
}
*/

const fn = async (req: Request, { supabase }: Dependencies) => {
  const { profile /* , lang = config.defaultLanguage */ }: {
    profile: Profile;
    lang?: string;
  } = await req.json();

  const profileQueryResponse = await supabase
    .from("Profile")
    .insert({
      id: profile.id,
      type: profile.type,
      slug: profile.slug,
      title: profile.title,
      description: profile.description,
      profilePictureUri: profile.profilePictureUri,
    })
    .select()
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profileInserted = profileQueryResponse.data;

  const result: ProfileGetResult = {
    payload: {
      profile: profileInserted,
      links: [],
      pages: [],
    },
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
