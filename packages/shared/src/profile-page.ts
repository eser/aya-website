type ProfilePage = {
  id: string;
  slug: string;
  title: string;
  content: string;
  order: number;
  publishedAt: string | null;
};

type ProfilePageList = Array<ProfilePage>;

export { type ProfilePage, type ProfilePageList };
