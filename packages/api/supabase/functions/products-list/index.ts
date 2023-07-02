import { type Dependencies, wrapper } from "../_shared/wrapper.ts";
import {
  type ProductsListResult,
  type ProfileList,
} from "@types/products-list-result.ts";

const fn = async (_req: Request, { supabase }: Dependencies) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Product")
    .is("deletedAt", null);

  const result: ProductsListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
