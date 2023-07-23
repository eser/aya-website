type ProfileLink = {
  id: string;
  slug: string;
  title: string;
  description: string;
  uri: string;

  iconSet: string | null;
  iconKey: string | null;

  order: number;
};

type ProfileLinkList = Array<ProfileLink>;

export { type ProfileLink, type ProfileLinkList };
