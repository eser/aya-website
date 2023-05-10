import { Auth, type AuthInterface } from "./index";

// underlying members (private)
// ------------------------------
const mockUser: any = {};
const mockIdToken = "ABC";
const mockBearerToken = "XYZ";

// implementation (public)
// -----------------------
class AuthMock extends Auth implements AuthInterface {
  override init() {
    if (super.hasInitCalled) {
      return;
    }

    super.hasInitCalled = true;
  }

  // eslint-disable-next-line class-methods-use-this
  override signInWithCustomToken(customToken: string): Promise<any> {
    return Promise.resolve(mockBearerToken);
  }

  // eslint-disable-next-line class-methods-use-this
  override signOut() {
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  override onAuthStateChanged(callback: (user: any) => void) {
    setTimeout(
      () => callback(mockUser),
      500,
    );

    return () => {};
  }

  // eslint-disable-next-line class-methods-use-this
  override getUser() {
    return mockUser;
  }

  // eslint-disable-next-line class-methods-use-this
  override getIdToken() {
    return Promise.resolve(mockIdToken);
  }
}

const authMock = new AuthMock();

export {
  type AuthInterface,
  AuthMock as Auth,
  authMock as auth,
  authMock as default,
};
