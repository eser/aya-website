import Image from "next/image";
// import Link from "next/link";
import { type ProfileGetComposition } from "types/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

interface ProfileHeadingProps {
  // lang: Language;
  item: ProfileGetComposition;
}

const ProfileHeading = (props: ProfileHeadingProps) => {
  return (
    <>
      <h1 className="flex flex-row items-center text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
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
      <h2 className="text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        {props.item.profile.description}
      </h2>
    </>
  );
};

export { ProfileHeading };
