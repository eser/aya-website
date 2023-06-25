import { createServerSupabaseClient } from "@/shared/lib/supabase-server";

const getSession = async () => {
  const supabase = createServerSupabaseClient();

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error:", err);

    return null;
  }
};

export { createServerSupabaseClient, getSession };
