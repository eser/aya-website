import { createId } from "@cuid";
import { z } from "@zod";
import {
  type ProfileGetResult,
  // FIXME(@eser) only works with relative paths?
} from "../../../../shared/src/profile-get-result.ts"; // from "@shared/profile-get-result.ts";

import { type SupabaseClient } from "../_shared/supabase-client.ts";

// TODO(@eser):
// 1. schema validation via zod
// 2. generate cuid ids if id fields are not given
// 3. insert profile entity with its translation entities (Profile and ProfileTx records)
// 4. insert related links, pages and stories with the profile and their respective translations
// 5. return inserted entities

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

const profileSchema = z.object({
  id: z.string().cuid2().optional(),
  type: z.enum(["Individual", "Organization", "Product"]),
  slug: z.string().min(1),
  // title: z.string().min(1),
  // description: z.string(),
  profilePictureUri: z.string().url().nullable(),

  showStories: z.boolean().optional(),
  showMembers: z.boolean().optional(),

  translations: z.record(
    z.string().length(2),
    z.object({
      id: z.string().cuid2().optional(),
      title: z.string().min(1),
      description: z.string(),
    }),
  ),
});

type ProfileCreateProps = z.infer<typeof profileSchema>;

const profileCreate = async (
  supabase: SupabaseClient,
  profile: ProfileCreateProps,
  _lang: string,
) => {
  const profileValidated = await profileSchema.parseAsync(profile);

  const defaultTranslation = Object.values(profileValidated.translations)[0];

  const profileRow = {
    id: profileValidated.id ?? createId(),
    type: profileValidated.type,
    slug: profileValidated.slug,
    profilePictureUri: profileValidated.profilePictureUri,

    showStories: profileValidated.showStories ?? false,
    showMembers: profileValidated.showMembers ?? false,

    title: defaultTranslation?.title ?? "",
    description: defaultTranslation?.description ?? "",
  };

  const profileQueryResponse = await supabase
    .from("Profile")
    .insert(profileRow)
    .select()
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profileTxRows = Object.entries(profileValidated.translations).map(
    ([langCode, translation]) => {
      return {
        id: createId(),
        profileId: profileQueryResponse.data.id,
        languageCode: langCode,
        titleTx: translation.title,
        descriptionTx: translation.description,
      };
    },
  );

  await supabase
    .from("ProfileTx")
    .insert(profileTxRows);

  const result: ProfileGetResult = {
    payload: {
      profile: profileQueryResponse.data,
      links: [],
      pages: [],
      // stories: [],
    },
  };

  return result;
};

export { profileCreate, type ProfileCreateProps };
