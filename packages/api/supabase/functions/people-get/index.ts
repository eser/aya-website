import { wrapper } from "../_shared/wrapper.ts";
import {
  type PeopleGetResult,
  type Profile,
} from "@types/people-get-result.ts";

wrapper(async (req, { supabase }) => {
  const { slug } = await req.json();

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Individual")
    .eq("slug", slug)
    .limit(1);

  const result: PeopleGetResult = {
    payload: profileQueryResponse.data.at(0) as Profile,
  };

  return result;
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
