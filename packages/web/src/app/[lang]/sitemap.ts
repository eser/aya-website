import { createServerSupabaseClient } from "@/shared/lib/supabase-server";

const sitemap = async () => {
  const supabase = createServerSupabaseClient();
  const { data: posts } = await supabase.from("posts").select();

  return (
    posts?.map(({ id }) => ({
      url: `https://acikyazilimagi.com/${id}`,
      lastModified: new Date(),
    })) ?? []
  );
};

export { sitemap as default };
