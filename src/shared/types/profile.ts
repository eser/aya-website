export type ProfileType = "Individual" | "Organization" | "Product" | "Venue";

export type Profile = {
  id: string;
  type: ProfileType;
  slug: string;
  title: string;
  description: string;
  profilePictureUri: string | null;

  showStories: boolean;
  showMembers: boolean;
};

export type ProfileList = Array<Profile>;
