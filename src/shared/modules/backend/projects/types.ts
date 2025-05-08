export type ProjectRole = "follower" | "sponsor" | "contributor" | "maintainer" | "lead" | "owner";

export type Project = {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  repository: string | null;
  website: string | null;
  role: ProjectRole;
  stats: {
    issues: number;
    stars: number;
    commits: number;
    prs: {
      total: number;
      resolved: number;
    };
  };
};
