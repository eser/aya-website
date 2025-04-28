import Link from "next/link";

export interface ProfileProps {
  slug: string;
  children?: React.ReactNode;
}

export const Profile = (props: ProfileProps) => {
  return (
    <Link
      href={`/${props.slug}/`}
      rel="noreferrer"
    >
      {props.children ?? props.slug}
    </Link>
  );
};
