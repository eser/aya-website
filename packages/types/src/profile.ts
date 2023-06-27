type Profile = {
  id: string;
  slug: string;
  title: string;
  email: string;
};

type ProfileList = Array<Profile>;

export { type Profile, type ProfileList };
