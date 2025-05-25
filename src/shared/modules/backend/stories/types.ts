import type { Profile } from "@/shared/modules/backend/profiles/types.ts";

export type StoryKind = "status" | "announcement" | "article" | "content" | "presentation";

export type Story = {
  id: string;
  kind: StoryKind;
  slug: string | null;

  cover_picture_uri: string | null;
  title: string | null;
  summary: string | null;
  content: string;

  is_featured: boolean;
  author_profile_id: string | null;
  author_profile: Profile | null;
  published_at: string | null;

  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
};

export type StoryEx = Omit<Story, "author_profile_id"> & {
  author_profile: {
    id: string;
    slug: string;
    title: string;
    profile_picture_uri: string | null;
  };
};
