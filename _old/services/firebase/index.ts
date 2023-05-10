import { FirebaseError, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  type AdditionalUserInfo,
  type Auth,
  type AuthProvider,
  browserPopupRedirectResolver,
  getAdditionalUserInfo,
  GithubAuthProvider,
  type OAuthCredential,
  signInWithPopup,
  type UserCredential,
} from "firebase/auth";

import { registry } from "../di/registry";
import { AuthProviders } from "../auth/auth-providers";

// constants
// deno-lint-ignore no-explicit-any
const authProviderMapping: Record<AuthProviders, [any, () => any]> = {
  [AuthProviders.GitHub]: [GithubAuthProvider, () => new GithubAuthProvider()],
};

// interface definitions
// ---------------------
interface FirebaseInterface {
  init: () => void;
}

interface PopupSignInResult {
  userCredential: UserCredential | null;
  oauthCredential: OAuthCredential | null;
  additionalUserInfo: AdditionalUserInfo | null;
  error: Error | null;
}

// underlying members (private)
// ------------------------------
const readConfigFromEnv = function readConfigFromEnv() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
};

// implementation (public)
// -----------------------
class Firebase implements FirebaseInterface {
  hasInitCalled: boolean;
  #internalApp: any;

  constructor() {
    this.hasInitCalled = false;
  }

  init() {
    if (this.hasInitCalled) {
      return;
    }

    const config = readConfigFromEnv();
    const app = initializeApp(config);

    // const analytics = getAnalytics(app);

    registry.setValue("firebase", { config, app });
    // registry.setValue("firebaseAnalytics", { analytics });

    this.#internalApp = app;
    this.hasInitCalled = true;
  }

  // eslint-disable-next-line class-methods-use-this
  async popupSignInWithProvider(
    auth: Auth,
    authProvider: AuthProviders,
  ): Promise<PopupSignInResult> {
    const providerMapping = authProviderMapping[authProvider];
    const providerType = providerMapping[0];
    const provider: AuthProvider = providerMapping[1]();

    try {
      const userCredential = await signInWithPopup(
        auth,
        provider,
        browserPopupRedirectResolver,
      );

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const oauthCredential = providerType.credentialFromResult(
        userCredential,
      );

      if (oauthCredential === null) {
        throw new Error("token is null");
      }

      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      return {
        userCredential: userCredential,
        oauthCredential: oauthCredential,
        additionalUserInfo: additionalUserInfo,
        error: null,
      };
    } catch (err) {
      if (err instanceof FirebaseError) {
        const oauthCredential = GithubAuthProvider.credentialFromError(err);

        return {
          userCredential: null,
          oauthCredential: oauthCredential,
          additionalUserInfo: null,
          error: err,
        };
      }

      throw err;
    }
  }
}

const firebase = new Firebase();

export { Firebase, firebase, firebase as default, type FirebaseInterface };
