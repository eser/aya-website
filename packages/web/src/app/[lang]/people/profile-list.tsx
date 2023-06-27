import Link from "next/link";
import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import {
  type PeopleListResult,
  type Profile,
} from "types/src/people-list-result.ts";

interface ProfileListProps {
}

const ProfileList = async (props: ProfileListProps) => {
  const { supabase } = useSupabaseServer();

  const peopleListResponse = await supabase.functions.invoke<PeopleListResult>(
    "people-list",
  );

  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Kişiler
      </h1>
      <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <ul>
          {peopleListResponse.data?.payload.map((profile: Profile) => (
            <li key={profile.id}>
              <Link href={`./${profile.slug}`}>{profile.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { ProfileList };
