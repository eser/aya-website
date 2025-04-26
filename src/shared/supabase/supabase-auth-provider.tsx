"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

// import { type Session, useSupabase } from "./use-supabase.ts";

type Session = unknown;

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
  const router = useRouter();
  // const { supabase } = useSupabase();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(props.serverSession);

  // useEffect(() => {
  //   const authStateChangeEvent = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       if (session?.access_token !== props.serverSession?.access_token) {
  //         router.refresh();
  //         return;
  //       }

  //       setSession(session);
  //       setIsLoading(false);
  //     },
  //   );

  //   return () => {
  //     authStateChangeEvent.data?.subscription?.unsubscribe?.();
  //   };
  // }, [router, supabase, props.serverSession?.access_token]);

  const state: SupabaseAuthContextState = {
    ...initialState,
    isLoading: isLoading,
    session: session,

    signInWithGithub: async () => {
      // await supabase.auth.signInWithOAuth({
      //   provider: "github",
      //   options: { redirectTo: `${window.location.origin}` },
      // });
    },
    signOut: async () => {
      // await supabase.auth.signOut();
      // // router.push("/");
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
