import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";
import { profileCreate, type ProfileCreateProps } from "./mod.ts";

const fn = async (req: Request, deps: Dependencies) => {
  const { profile, lang = config.defaultLanguage }: {
    profile: ProfileCreateProps;
    lang?: string;
  } = await req.json();

  const result = await profileCreate(deps.supabase, profile, lang);

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
