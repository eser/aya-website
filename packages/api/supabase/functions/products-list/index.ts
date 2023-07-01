import { wrapper } from "../_shared/wrapper.ts";
import {
  type ProductsListResult,
  type ProfileList,
} from "@types/products-list-result.ts";

wrapper(async (_req, { supabase }) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Product")
    .is("deletedAt", null);

  const result: ProductsListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
});
