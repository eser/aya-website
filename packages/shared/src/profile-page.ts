type ProfilePage = {
  id: string;
  slug: string;
  title: string;
  content: string;
};

type ProfilePageList = Array<ProfilePage>;

export { type ProfilePage, type ProfilePageList };
