import { faker } from "@faker-js/faker";

import type { GetProfileData } from "@/shared/modules/backend/profiles/get-profile.ts";
import type { GetProfilesData } from "@/shared/modules/backend/profiles/get-profiles.ts";
import type { GetUserData } from "@/shared/modules/backend/users/get-user.ts";
import type { GetUsersData } from "@/shared/modules/backend/users/get-users.ts";
import type { GetStoryData } from "@/shared/modules/backend/stories/get-story.ts";
import type { GetStoriesData } from "@/shared/modules/backend/stories/get-stories.ts";

export function generateFakeData(entity: string, identifier: string | undefined) {
  const hasIdentifier = identifier !== undefined;

  if (entity === "profiles") {
    if (!hasIdentifier) {
      return Array.from({ length: 10 }, () => (
        {
          id: faker.string.ulid(),
          kind: "individual",
          slug: identifier ?? faker.lorem.slug(),
          profile_picture_uri: faker.image.avatar(),
          title: faker.person.fullName(),
          description: faker.lorem.paragraph(),
          show_stories: faker.datatype.boolean(),
          show_projects: faker.datatype.boolean(),
          show_members: faker.datatype.boolean(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
          deleted_at: null,
        }
      )) satisfies GetProfilesData;
    }

    return {
      id: faker.string.ulid(),
      kind: "individual",
      slug: identifier ?? faker.lorem.slug(),
      profile_picture_uri: faker.image.avatar(),
      title: faker.person.fullName(),
      description: faker.lorem.paragraph(),
      show_stories: faker.datatype.boolean(),
      show_projects: faker.datatype.boolean(),
      show_members: faker.datatype.boolean(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
      // deleted_at: null,

      links: [],
      pages: [],
    } satisfies GetProfileData;
  }

  if (entity === "users") {
    if (!hasIdentifier) {
      return Array.from({ length: 10 }, () => (
        {
          id: identifier ?? faker.string.ulid(),
          kind: "regular",
          first_name: faker.person.firstName(),
          last_name: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          github_handle: faker.internet.username(),
          github_remote_id: faker.string.uuid(),
          bsky_handle: faker.internet.username(),
          bsky_remote_id: faker.string.uuid(),
          x_handle: faker.internet.username(),
          x_remote_id: faker.string.uuid(),
          individual_profile_id: faker.string.ulid(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
          deleted_at: null,
        }
      )) satisfies GetUsersData;
    }

    return {
      id: identifier ?? faker.string.ulid(),
      kind: "regular",
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      github_handle: faker.internet.username(),
      github_remote_id: faker.string.uuid(),
      bsky_handle: faker.internet.username(),
      bsky_remote_id: faker.string.uuid(),
      x_handle: faker.internet.username(),
      x_remote_id: faker.string.uuid(),
      individual_profile_id: faker.string.ulid(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
      deleted_at: null,
    } satisfies GetUserData;
  }

  if (entity === "stories") {
    if (!hasIdentifier) {
      return Array.from({ length: 10 }, () => (
        {
          id: faker.string.ulid(),
          kind: "status",
          slug: faker.lorem.slug(),
          cover_picture_uri: faker.image.url(),
          title: faker.lorem.sentence(),
          summary: faker.lorem.paragraph(),
          content: faker.lorem.paragraphs(),
          is_featured: faker.datatype.boolean(),
          published_at: faker.date.past(),
          author_profile_id: faker.string.ulid(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
          deleted_at: null,
        }
      )) satisfies GetStoriesData;
    }

    return {
      id: faker.string.ulid(),
      kind: "status",
      slug: faker.lorem.slug(),
      cover_picture_uri: faker.image.url(),
      title: faker.lorem.sentence(),
      summary: faker.lorem.paragraph(),
      content: faker.lorem.paragraphs(),
      is_featured: faker.datatype.boolean(),
      published_at: faker.date.past(),
      author_profile_id: faker.string.ulid(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
      deleted_at: null,
    } satisfies GetStoryData;
  }

  return null;
}
