import Link from "next/link";

interface ProfileProps {
  slug: string;
  children?: React.ReactNode;
}

const Profile = (props: ProfileProps) => {
  return (
    <Link
      href={`/${props.slug}/`}
      rel="noreferrer"
    >
      {props.children ?? props.slug}
    </Link>
  );
};

export { Profile, type ProfileProps };
