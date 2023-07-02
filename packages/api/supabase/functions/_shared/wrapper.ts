// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "@std/http/server.ts";
import { corsHeaders } from "./cors.ts";
import {
  getSupabaseClientFromRequest,
  type SupabaseClient,
} from "./supabase-client.ts";

const config = {
  defaultLanguage: "tr",
};

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

export { config, type Dependencies, getMockDependencies, wrapper };
