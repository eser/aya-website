import { Firebase, type FirebaseInterface } from "./index";

// implementation (public)
// -----------------------
class FirebaseMock extends Firebase implements FirebaseInterface {
  init() {
    if (super.hasInitCalled) {
      return;
    }

    super.hasInitCalled = true;
  }
}

const firebaseMock = new FirebaseMock();

export {
  type FirebaseInterface,
  FirebaseMock as Firebase,
  firebaseMock as default,
  firebaseMock as firebase,
};
