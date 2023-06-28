type Profile = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

type ProfileList = Array<Profile>;

export { type Profile, type ProfileList };
