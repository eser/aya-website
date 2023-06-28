// import Link from "next/link";
import { type PeopleGetComposition } from "types/src/people-get-result.ts";

interface ProfileHeadingProps {
  item: PeopleGetComposition | undefined;
}

const ProfileHeading = (props: ProfileHeadingProps) => {
  if (props.item === undefined) {
    return (
      <>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Profile
        </h1>
        <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Profile not found.
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Profile: {props.item.profile.slug}
      </h1>
      <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        {JSON.stringify(props.item)}
      </div>
    </>
  );
};

export { ProfileHeading };
