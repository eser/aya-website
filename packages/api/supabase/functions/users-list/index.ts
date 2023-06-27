import { wrapper } from "../_shared/wrapper.ts";
import { type UserList, type UserListResult } from "@types/user-list-result.ts";

wrapper(async (_req, { supabase }) => {
  const userQueryResponse = await supabase.from("User").select("*");

  const result: UserListResult = {
    payload: userQueryResponse.data as UserList,
  };

  return result;
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
