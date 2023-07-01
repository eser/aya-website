type ProfileLink = {
  id: string;
  slug: string;
  title: string;
  uri: string;

  iconSet: string | null;
  iconKey: string | null;
};

type ProfileLinkList = Array<ProfileLink>;

export { type ProfileLink, type ProfileLinkList };
