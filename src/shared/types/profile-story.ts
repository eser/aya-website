export type ProfileStoryCategory = "Status" | "Announcement" | "News";

export type ProfileStory = {
  id: string;
  slug: string;
  category: ProfileStoryCategory;
  isFeatured: boolean;

  title: string;
  content: string;

  publishedAt: string | null;
};

export type ProfileStoryList = Array<ProfileStory>;
