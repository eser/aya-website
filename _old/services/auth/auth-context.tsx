import React, {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "./index";
import { type UserState } from "./user-state";

type AuthContextProviderProps = PropsWithChildren<{}>;
type AuthContextValue = UserState;

const userStateDefault = {
  isLoading: true,
  isLoggedIn: false,
  user: null,
};

const AuthContext = createContext<AuthContextValue>(userStateDefault);

const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [userState, setUserState] = useState<UserState>(userStateDefault);

  // FIXME(@eser) it renders twice on load because of react 18's strict mode behavior
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log("user", user);
      setUserState({ isLoading: false, isLoggedIn: user !== null, user: user });
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={userState}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, useAuthContext };
