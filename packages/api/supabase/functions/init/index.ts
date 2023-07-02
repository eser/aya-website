import { type Dependencies, wrapper } from "../_shared/wrapper.ts";

const fn = async (req: Request, { supabase }: Dependencies) => {
  const getUserResponse = await supabase.auth.getUser();

  const { name } = await req.json();

  const payload = {
    message: `Hello ${name}!`,
    data: getUserResponse.data,
  };

  return payload;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
