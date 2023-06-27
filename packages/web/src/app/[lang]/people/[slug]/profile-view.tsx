import Link from "next/link";
import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import {
  type PeopleListResult,
  type Profile,
} from "types/src/people-list-result.ts";

interface ProfileViewProps {
  slug: string;
}

const ProfileView = async (props: ProfileViewProps) => {
  const { supabase } = useSupabaseServer();

  const individualProfileResponse = await supabase.functions.invoke<
    PeopleListResult
  >(
    "people-get",
    {
      body: JSON.stringify({
        slug: props.slug,
      }),
    },
  );

  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Profile: {props.slug}
      </h1>
      <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        {JSON.stringify(individualProfileResponse.data?.payload)}
      </div>
    </>
  );
};

export { ProfileView };
