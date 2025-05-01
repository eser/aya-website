import * as React from "react";

import Link from "next/link";

export type ProfileProps = {
  slug: string;
  children?: React.ReactNode;
};

export function Profile(props: ProfileProps) {
  return (
    <Link
      href={`/${props.slug}/`}
      rel="noreferrer"
    >
      {props.children ?? props.slug}
    </Link>
  );
}
