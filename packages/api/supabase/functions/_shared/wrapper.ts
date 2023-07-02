// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "@std/http/server.ts";
import { corsHeaders } from "./cors.ts";
import {
  getSupabaseClientFromRequest,
  type SupabaseClient,
} from "./supabase-client.ts";

interface Dependencies {
  supabase: SupabaseClient;
}

const wrapper = (fn: (req: Request, deps: Dependencies) => unknown) => {
  serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    try {
      const supabase = getSupabaseClientFromRequest(req);

      const dependencies: Dependencies = {
        supabase,
      };

      const payload = await fn(req, dependencies);

      return new Response(
        JSON.stringify(payload),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        },
      );
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }
  });
};

const getMockDependencies = (): Dependencies => {
  // const mockUser = {
  //   id: "123",
  //   aud: "authenticated",
  //   role: "authenticated",
  //   email: "",
  //   app_metadata: {
  //     provider: "email",
  //   },
  //   user_metadata: {
  //     full_name: "Test User",
  //   },
  //   created_at: "2021-03-01T00:00:00.000000Z",
  //   updated_at: "2021-03-01T00:00:00.000000Z",
  // };
  const mockUser = null;

  const mockSupabaseClient = {
    from: () => mockSupabaseClient,
    select: () => mockSupabaseClient,
    insert: () => mockSupabaseClient,
    update: () => mockSupabaseClient,
    delete: () => mockSupabaseClient,
    auth: {
      getUser: () => Promise.resolve({ data: { user: mockUser } }),
      signIn: () => Promise.resolve({ data: mockUser, error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
  } as unknown as SupabaseClient;

  return {
    supabase: mockSupabaseClient,
  };
};

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

export { type Dependencies, getMockDependencies, wrapper };
