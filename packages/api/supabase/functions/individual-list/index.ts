import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";
import { individualList } from "./mod.ts";

const fn = async (req: Request, deps: Dependencies) => {
  const { lang = config.defaultLanguage }: { lang?: string } = await req.json();

  const result = await individualList(deps.supabase, lang);

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
