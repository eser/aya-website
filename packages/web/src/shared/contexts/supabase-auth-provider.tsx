"use client";

import { createContext, useState } from "react";

import { type Session, useSupabase } from "@/shared/hooks/use-supabase.ts";

interface SupabaseAuthContextState {
  session: Session | null;
  isLoading: boolean;

  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
}

const initialState: SupabaseAuthContextState = {
  session: null,
  isLoading: true,

  signInWithGithub: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

const SupabaseAuthContext = createContext<SupabaseAuthContextState>(
  initialState,
);

interface SupabaseAuthProviderProps {
  serverSession: Session | null;
  children: React.ReactNode;
}

const SupabaseAuthProvider = (props: SupabaseAuthProviderProps) => {
  const { supabase } = useSupabase();
  const [session, setSession] = useState<Session | null>(props.serverSession);

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  const state: SupabaseAuthContextState = {
    ...initialState,
    isLoading: false,
    session: session,

    signInWithGithub: async () => {
      await supabase.auth.signInWithOAuth({ provider: "github" });
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
  };

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
