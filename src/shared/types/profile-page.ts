export type ProfilePage = {
  id: string;
  slug: string;
  title: string;
  content: string;
  order: number;
  publishedAt: string | null;
};

export type ProfilePageList = Array<ProfilePage>;
