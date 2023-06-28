import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import { type PeopleGetResult } from "types/src/people-get-result.ts";
import { ProfileHeading } from "./profile-heading.tsx";
import { SidebarNav } from "./sidebar-nav.tsx";

interface ProfileViewProps {
  slug: string;
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
];

const ProfileView = async (props: ProfileViewProps) => {
  const { supabase } = useSupabaseServer();

  const individualProfileResponse = await supabase.functions.invoke<
    PeopleGetResult
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
      <ProfileHeading item={individualProfileResponse.data?.payload} />

      <section className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          Deneme
        </div>
      </section>
    </>
  );
};

export { ProfileView };
