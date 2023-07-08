"use client";

import { createContext, useState } from "react";
import { type Database } from "types/src/supabase-database-types.ts";

import {
  createClientSupabaseClient,
  type Session,
  type SupabaseClient,
} from "./supabase-client.ts";

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

export {
  type Session,
  SupabaseContext,
  type SupabaseContextState,
  SupabaseProvider,
};
