export type ProfileLink = {
  id: string;
  slug: string;
  title: string;
  description: string;
  uri: string;

  iconSet: string | null;
  iconKey: string | null;

  order: number;
};

export type ProfileLinkList = Array<ProfileLink>;
