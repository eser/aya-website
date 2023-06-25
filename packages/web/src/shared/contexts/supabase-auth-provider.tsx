"use client";

import { createContext, useState } from "react";

import { Session } from "@supabase/supabase-js";
import { useSupabase } from "@/shared/contexts/use-supabase";

interface SupabaseAuthContextState {
  user: unknown | undefined;
  isLoading: boolean;

  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
}

const SupabaseAuthContext = createContext<SupabaseAuthContextState>({
  user: undefined,
  isLoading: true,

  signInWithGithub: async () => {},
  signOut: async () => {}
});

interface SupabaseAuthProviderProps {
  children: React.ReactNode;
}

const SupabaseAuthProvider = (props: SupabaseAuthProviderProps) => {
  const [supabase] = useState<SupabaseClient<Database>>(
    () => createClientSupabaseClient(),
  );

  const state: SupabaseAuthContextState = { supabase };

  return (
    <SupabaseAuthContext.Provider value={state}>
      {props.children}
    </SupabaseAuthContext.Provider>
  );
};

export { SupabaseAuthContext, type SupabaseAuthContextState, SupabaseAuthProvider };
