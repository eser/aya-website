export type UserKind = "regular" | "editor" | "admin";

export type User = {
  id: string;
  kind: UserKind;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  github_handle: string | null;
  github_remote_id: string | null;
  bsky_handle: string | null;
  bsky_remote_id: string | null;
  x_handle: string | null;
  x_remote_id: string | null;
  individual_profile_id: string | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
};
