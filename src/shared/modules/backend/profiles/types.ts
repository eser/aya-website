export type ProfileKind = "individual" | "product";

export type Profile = {
  id: string;
  kind: ProfileKind;
  slug: string;
  profile_picture_uri: string | null;
  pronouns: string | null;
  title: string;
  description: string;

  show_stories: boolean;
  show_projects: boolean;
  show_members: boolean;

  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
};

export type ProfileLinkKind = "website" | "github" | "bsky" | "x";

export type ProfileLink = {
  id: string;
  kind: ProfileLinkKind;

  profile_id: string;
  order: number;

  is_managed: boolean;
  is_verified: boolean;

  remote_id: string | null;
  public_id: string | null;
  uri: string | null;

  auth_provider: string | null;
  auth_token_scope: string | null;
  auth_token: string | null;
  auth_token_expires_at: Date | null;
  auth_refresh_token: string | null;
  auth_refresh_token_expires_at: Date | null;

  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
};

export type ProfilePage = {
  id: string;
  slug: string;

  profile_id: string;
  order: number;

  cover_picture_uri: string | null;
  title: string;
  summary: string;
  content: string;

  published_at: Date | null;

  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
};

export type ProfileMembershipKind = "follower" | "sponsor" | "contributor" | "maintainer" | "lead" | "owner";

export type ProfileMembership = {
  id: string;
  kind: ProfileMembershipKind;

  profile_id: string;
  user_id: string;

  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
};
