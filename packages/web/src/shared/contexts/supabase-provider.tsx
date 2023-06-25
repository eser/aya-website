"use client";

import { createContext, useState } from "react";

import {
  createClientSupabaseClient,
  type SupabaseClient,
} from "@/shared/lib/supabase-client";
import { type Database } from "@/shared/types/database";

interface SupabaseContextState {
  supabase: SupabaseClient<Database>;
}

const SupabaseContext = createContext<SupabaseContextState | undefined>(
  undefined,
);

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider = (props: SupabaseProviderProps) => {
  const [supabase] = useState<SupabaseClient<Database>>(
    () => createClientSupabaseClient(),
  );

  const state: SupabaseContextState = { supabase };

  return (
    <SupabaseContext.Provider value={state}>
      {props.children}
    </SupabaseContext.Provider>
  );
};

export { SupabaseContext, type SupabaseContextState, SupabaseProvider };
