import { wrapper } from "../_shared/wrapper.ts";
import {
  type PeopleListResult,
  type ProfileList,
} from "@types/people-list-result.ts";

wrapper(async (_req, { supabase }) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Individual")
    .is("deletedAt", null);

  const result: PeopleListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
