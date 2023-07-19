import Image from "next/image";
import Link from "next/link";

import { type ProfileGetComposition } from "shared/src/profile-get-result.ts";

import { getLinkIcon } from "@/shared/components/icons.tsx";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

interface ProfileHeadingProps {
  // lang: Language;
  item: ProfileGetComposition;
}

const ProfileHeading = (props: ProfileHeadingProps) => {
  return (
    <>
      <h1 className="flex flex-row items-center my-0">
        <Conditional test={props.item.profile.profilePictureUri !== null}>
          <Image
            src={props.item.profile.profilePictureUri}
            width={110}
            height={110}
            alt={props.item.profile.title}
            loading="lazy"
            className="rounded-full mr-4"
          />
        </Conditional>
        {props.item.profile.title}
      </h1>
      <h2 className="text-lg sm:text-xl my-0 font-sans">
        {props.item.profile.description}
      </h2>
      <Conditional test={props.item.links.length > 0}>
        <div className="flex flex-row">
          {props.item.links.map((link) => (
            <Link
              key={link.id}
              href={link.uri}
              className="text-lg sm:text-xl mr-4"
              title={link.title}
            >
              {getLinkIcon(link.iconSet, link.iconKey)}
            </Link>
          ))}
        </div>
      </Conditional>
    </>
  );
};

export { ProfileHeading };
