import { type Dependencies, wrapper } from "../_shared/wrapper.ts";
// import { profileRemove } from "./mod.ts";

const fn = async (req: Request, _deps: Dependencies) => {
  const { slug }: {
    slug: string;
  } = await req.json();

  // const result = await profileRemove(deps.supabase, slug);
  const result = { message: "Not implemented" };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
