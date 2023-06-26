// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve, type ServerRequest } from "@std/http/server.ts";
import { corsHeaders } from "./cors.ts";
import {
  getSupabaseClientFromRequest,
  type SupabaseClient,
} from "./supabase-client.ts";

interface Dependencies {
  supabase: SupabaseClient;
}

const wrapper = (fn: (req: ServerRequest, deps: Dependencies) => unknown) => {
  serve(async (req: ServerRequest) => {
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

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

export { wrapper };
