type ProfileType = "Individual" | "Organization" | "Product" | "Venue";

type Profile = {
  id: string;
  type: ProfileType;
  slug: string;
  title: string;
  description: string;
  profilePictureUri: string | null;
};

type ProfileList = Array<Profile>;

export { type Profile, type ProfileList, type ProfileType };
