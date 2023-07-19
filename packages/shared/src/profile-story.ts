type ProfileStoryCategory = "Status" | "Announcement" | "News";

type ProfileStory = {
  id: string;
  slug: string;
  category: ProfileStoryCategory;
  isFeatured: boolean;
  publishedAt: string | null;

  title: string;
  content: string;
};

type ProfileStoryList = Array<ProfileStory>;

export { type ProfileStory, type ProfileStoryList };
