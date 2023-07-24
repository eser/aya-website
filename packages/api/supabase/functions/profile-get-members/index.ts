import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";
import { profileGetMembers } from "./mod.ts";

const fn = async (req: Request, deps: Dependencies) => {
  const { slug, lang = config.defaultLanguage }: {
    slug: string;
    lang?: string;
  } = await req.json();

  const result = await profileGetMembers(deps.supabase, slug, lang);

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
