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

export { config, type Dependencies, wrapper };
