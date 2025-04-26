type ProfileStoryCategory = "Status" | "Announcement" | "News";

type ProfileStory = {
  id: string;
  slug: string;
  category: ProfileStoryCategory;
  isFeatured: boolean;

  title: string;
  content: string;

  publishedAt: string | null;
};

type ProfileStoryList = Array<ProfileStory>;

export { type ProfileStory, type ProfileStoryList };
