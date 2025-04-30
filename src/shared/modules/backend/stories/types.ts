export type StoryKind = "status" | "announcement" | "news" | "article";

export type Story = {
  id: string;
  kind: StoryKind;
  slug: string;

  cover_picture_uri: string | null;
  title: string;
  summary: string;
  content: string;

  is_featured: boolean;
  author_profile_id: string | null;
  published_at: Date | null;

  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
};
