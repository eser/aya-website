"use client";

import { createContext } from "react";

// import { useSupabase } from "@/shared/contexts/use-supabase";

interface SupabaseAuthContextState {
  user: unknown | undefined;
  isLoading: boolean;

  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
}

const initialState: SupabaseAuthContextState = {
  user: undefined,
  isLoading: true,

  signInWithGithub: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

const SupabaseAuthContext = createContext<SupabaseAuthContextState>(
  initialState,
);

interface SupabaseAuthProviderProps {
  children: React.ReactNode;
}

const SupabaseAuthProvider = (props: SupabaseAuthProviderProps) => {
  // const { supabase } = useSupabase();

  // TODO(@eser) implement this

  const state: SupabaseAuthContextState = { ...initialState };

  return (
    <SupabaseAuthContext.Provider value={state}>
      {props.children}
    </SupabaseAuthContext.Provider>
  );
};

export {
  SupabaseAuthContext,
  type SupabaseAuthContextState,
  SupabaseAuthProvider,
};
