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
  published_at: string | null;

  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
};
