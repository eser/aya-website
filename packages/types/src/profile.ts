type Profile = {
  id: string;
  slug: string;
  title: string;
  description: string;
  profilePictureUri: string | null;
};

type ProfileList = Array<Profile>;

export { type Profile, type ProfileList };
